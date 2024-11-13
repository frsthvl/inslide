<template>
    <div class="w-full rounded-lg bg-zinc-100 p-6 text-center">
        <p class="text-xl md:text-4xl not-prose mb-4">
            Create new slides from a remote markdown file
        </p>
        <span v-if="error" class="text-red-500 text-sm float-left">{{
            error
        }}</span>
        <form @submit.prevent="createSlides">
            <input
                type="text"
                v-model="url"
                placeholder="https://example.com/slides.md"
                class="w-full border rounded-lg block disabled:shadow-none appearance-none text-sm py-2 h-10 leading-[1.375rem] pl-3 pr-3 bg-white text-zinc-700 disabled:text-zinc-500 placeholder-zinc-400 disabled:placeholder-zinc-400/70 shadow-sm border-zinc-200 border-b-zinc-300/80 disabled:border-b-zinc-200"
                :class="{ 'ring-red-500 ring-1': error }"
            />
            <button
                type="submit"
                class="relative w-full mt-2 items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 rounded-lg px-4 inline-flex bg-zinc-800 hover:bg-zinc-900 text-white shadow-[inset_0px_1px_theme(colors.zinc.900),inset_0px_2px_theme(colors.white/.15)]"
            >
                Create Slides
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: "",
            error: null,
        };
    },
    methods: {
        createSlides() {
            const isValidUrl = (string) => {
                try {
                    new URL(string);
                    return true;
                } catch (_) {
                    return false;
                }
            };

            if (isValidUrl(this.url)) {
                const encodedUrl = encodeURIComponent(this.url);
                this.url = "";
                window.location.href = `${this.$config.public.appUrl}/${encodedUrl}`;
            } else {
                this.error =
                    "Invalid URL. Make sure it's a valid .md file URL.";
            }
        },
    },
};
</script>
