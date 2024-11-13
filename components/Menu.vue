<template>
    <div class="absolute top-2 right-2 z-50" :style="{ color: color }">
        <button
            @click="open = !open"
            aria-label="Menu"
            class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-2 inline-flex bg-transparent hover:bg-zinc-800/5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <div v-show="open" class="relative">
            <div
                class="absolute right-0 mt-2 w-32 p-1 bg-white border border-gray-200 rounded-md shadow-lg"
            >
                <a
                    href="/new"
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium [&[disabled]]:opacity-50 text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                    >
                        <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                        />
                    </svg>
                    New
                </a>
                <a
                    v-if="isSlide"
                    :href="
                        this.isHomepage
                            ? 'https://insli.de/welcome.md'
                            : this.$route.params.slides
                    "
                    target="_blank"
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium [&[disabled]]:opacity-50 text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25Zm4.03 6.28a.75.75 0 0 0-1.06-1.06L4.97 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06L6.56 10l1.72-1.72Zm4.5-1.06a.75.75 0 1 0-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Source
                </a>
                <button
                    @click="copy"
                    v-if="!copied"
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium [&[disabled]]:opacity-50 text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5v-3.379a3 3 0 0 0-.879-2.121l-3.12-3.121a3 3 0 0 0-1.402-.791 2.252 2.252 0 0 1 1.913-1.576A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z"
                            clip-rule="evenodd"
                        />
                        <path
                            d="M3.5 6A1.5 1.5 0 0 0 2 7.5v9A1.5 1.5 0 0 0 3.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L8.44 6.439A1.5 1.5 0 0 0 7.378 6H3.5Z"
                        />
                    </svg>
                    Copy
                </button>
                <button
                    v-else
                    disabled
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Copied
                </button>
                <a
                    href="/about"
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium [&[disabled]]:opacity-50 text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                    >
                        <path
                            d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
                        />
                    </svg>
                    About
                </a>
                <a
                    href="https://github.com/frsthvl/inslide"
                    target="_blank"
                    class="flex items-center gap-2 px-2 py-1.5 w-full focus:outline-none rounded-md text-left text-sm font-medium [&[disabled]]:opacity-50 text-zinc-800 hover:bg-zinc-800/5"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="size-5 fill-slate-900"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                        ></path>
                    </svg>
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            copied: false,
        };
    },
    props: {
        color: {
            type: String,
            required: false,
            default: "#18181b",
        },
        isSlide: {
            type: Boolean,
            required: false,
            default: false,
        },
        isHomepage: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    methods: {
        copy() {
            navigator.clipboard.writeText(window.location.href);
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        },
    },
};
</script>
