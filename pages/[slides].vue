<template>
	<div
		:style="{ backgroundColor: options.background, color: options.color }"
		class="inset-0 h-screen w-full"
	>
		<Head>
			<title>{{ options.title }} | Insli.de</title>
			<meta name="description" :content="options.description" />

			<meta property="og:title" :content="options.title" />
			<meta property="og:description" :content="options.description" />
			<meta
				property="og:image"
				:content="`https://dynamic-og-image-generator.vercel.app//api/generate?title=${options.title}-${options.description}&author=Insli.de&websiteUrl=https://insli.de&theme=default`"
			/>
		</Head>

		<transition name="fade" mode="out-in">
			<div
				v-if="loading"
				class="inset-0 bg-zinc-100 w-full h-full overflow-hidden flex flex-col items-center justify-center z-50"
			>
				<div role="status">
					<svg
						aria-hidden="true"
						class="inline w-10 h-10 text-zinc-200 animate-spin dark:text-zinc-600 fill-zinc-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span class="sr-only">Loading...</span>
				</div>
			</div>

			<div v-else>
				<Menu :color="options.color" :isSlide="true" />

				<div v-if="markdownError" class="p-4 mx-auto text-center">
					<div class="text-red-500 font-bold">
						Error loading markdown:
					</div>
					<pre>{{ markdownError }}</pre>
					<a href="/about" class="mt-4 underline"
						>Go to instructions</a
					>
				</div>
				<div v-else>
					<transition name="fade" mode="out-in">
						<SlideContent
							v-if="fontLoaded && contentLoaded"
							:key="slide"
							:content="markdownSections[slide]"
						/>
					</transition>

					<Navigation
						@next="nextSlide"
						@prev="prevSlide"
						:isFirstSlide="slide === 0"
						:isLastSlide="slide === markdownSections.length - 1"
						:color="options.color"
						:copyright="options.copyright"
					/>

					<Progress
						v-if="options.progress"
						:total="markdownSections.length"
						:slide="slide"
						:color="options.color"
					/>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import frontMatter from "front-matter";
import { marked } from "marked";

export default {
	data() {
		return {
			loading: true,
			markdownError: null,
			markdownSections: [],
			slides: "",
			slide: 0,
			fontLoaded: false,
			contentLoaded: false,
			options: {
				title: "Markdown Slides",
				description: "A simple markdown slide deck",
				color: "#18181b",
				background: "#f4f4f5",
				accent: "#f97316",
				copyright: "",
				progress: true,
			},
		};
	},
	watch: {
		slide() {
			this.updateQueryParameter();
		},
	},
	methods: {
		parseFrontMatter() {
			// Fetch markdown content from external URL
			fetch(this.slides)
				.then((response) => response.text())
				.then((rawContent) => {
					// Parse front matter and markdown content
					const parsed = frontMatter(rawContent);

					this.options = {
						...this.options,
						...parsed.attributes,
					};

					this.markdownSections = parsed.body
						.split(/\n\s*\n/)
						.map((section) => marked(section));
				})
				.finally(() => {
					this.contentLoaded = true;
					this.loading = false;
					this.syncSlideWithQueryParameter();
				})
				.catch((error) => {
					console.error("Error fetching markdown:", error);
					this.markdownError =
						error +
						" - Make sure the markdown file is accessible and valid";
				});
		},
		nextSlide() {
			if (this.slide < this.markdownSections.length - 1) {
				this.slide += 1;
			}
		},
		prevSlide() {
			if (this.slide > 0) {
				this.slide -= 1;
			}
		},
		triggerFullscreen() {
			const element = document.documentElement;
			const requestFullscreen =
				element.requestFullscreen ||
				element.webkitRequestFullscreen ||
				element.mozRequestFullScreen ||
				element.msRequestFullscreen;
			const exitFullscreen =
				document.exitFullscreen ||
				document.webkitExitFullscreen ||
				document.mozCancelFullScreen ||
				document.msExitFullscreen;

			if (document.fullscreenElement) {
				if (exitFullscreen) {
					exitFullscreen.call(document);
				}
			} else {
				if (requestFullscreen) {
					requestFullscreen.call(element);
				}
			}
		},
		updateQueryParameter() {
			const url = new URL(window.location);
			url.searchParams.set("slide", this.slide);
			window.history.pushState({}, "", url);
		},
		syncSlideWithQueryParameter() {
			const url = new URL(window.location);
			const slideParam = parseInt(url.searchParams.get("slide"), 10);
			if (!isNaN(slideParam)) {
				this.slide =
					slideParam < this.markdownSections.length ? slideParam : 0;
			} else {
				this.slide = 0;
			}
		},
		handleKeydown(event) {
			if (
				event.key === "ArrowRight" ||
				event.key === "ArrowDown" ||
				event.key === " "
			) {
				this.nextSlide();
			} else if (
				event.key === "ArrowLeft" ||
				event.key === "ArrowUp" ||
				event.key === "Backspace"
			) {
				this.prevSlide();
			} else if (event.key === "f") {
				this.triggerFullscreen();
			} else if (event.key === "a") {
				this.slide = 0;
			} else if (event.key === "d") {
				this.slide = this.markdownSections.length - 1;
			}
		},
	},
	mounted() {
		this.slides = this.$route.params.slides;

		try {
			const url = new URL(this.slides);
			if (!url.pathname.endsWith(".md")) {
				this.markdownError = "You must provide a valid markdown file";
				throw new Error("Invalid file type");
			}
		} catch (_) {
			this.markdownError = "You must provide a valid markdown file";
			return;
		}

		window.addEventListener("keydown", this.handleKeydown);

		const fontLoadInterval = setInterval(() => {
			if (document.fonts && !document.fonts.check("16px Montserrat")) {
				return;
			}

			this.fontLoaded = true;
			clearInterval(Number(fontLoadInterval));
		}, 50);

		this.parseFrontMatter();
	},
	beforeDestroy() {
		window.removeEventListener("keydown", this.handleKeydown);
		window.removeEventListener("resize", this.fitText);
	},
};
</script>

<style>
.typography {
	--accent-color: v-bind("options.accent");
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
