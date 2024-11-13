<template>
	<div
		class="absolute w-full bottom-4 flex justify-between items-center px-4 opacity-50"
		:style="{ color: color }"
	>
		<div class="min-w-10">
			<button
				v-if="!isFirstSlide"
				aria-label="Previous Slide"
				@click="$emit('prev')"
				class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-2 inline-flex bg-transparent hover:bg-zinc-800/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
		</div>
		<div
			v-text="copyright"
			class="text-xs text-center place-self-end"
		></div>
		<div class="min-w-10">
			<button
				v-if="!isLastSlide"
				aria-label="Next Slide"
				@click="$emit('next')"
				class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-2 inline-flex bg-transparent hover:bg-zinc-800/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isFirstSlide: {
			type: Boolean,
			required: true,
		},
		isLastSlide: {
			type: Boolean,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		copyright: {
			type: String,
			required: true,
		},
	},
};
</script>
