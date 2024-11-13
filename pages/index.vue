<template>
    <Menu />

    <Head>
        <title>Magical Markdown Presentations | Insli.de</title>
        <meta
            name="description"
            content="Create automatically styled presentations from your markdown files in seconds. Completely free, no registration required."
        />

        <meta
            property="og:title"
            content="Magical Markdown Presentations | Insli.de"
        />
        <meta
            property="og:description"
            content="Create automatically styled presentations from your markdown files in seconds. Completely free, no registration required."
        />
    </Head>

    <div class="max-w-3xl p-4 mx-auto my-12 prose md:prose-xl">
        <section>
            <h1>Insli.de</h1>
            <h3>
                Turn every remote markdown file into an auto-styled presentation
                in no time.
            </h3>
        </section>

        <NewSlides />

        <section>
            <h2>How it works</h2>
            <p>
                To create a new presentation, you just need to create a new
                markdown file in a remotely accessible location and append an
                encoded url of that file to the Insli.de URL like
                <span class="p bg-zinc-100 rounded-lg"
                    >{{ $config.public.appUrl }}/&lt;encoded-url.md&gt;</span
                >.
            </p>
            <p>
                Insli.de will fetch the markdown file from the given URL and
                render it as a presentation. Each slide is seperated by an empty
                line and the content will automatically use all available screen
                space.
            </p>
            <p>
                Every slide will be rendered responsively and the presentation
                can be navigated with the keyboard.
            </p>
        </section>

        <section>
            <h2>Shortcuts</h2>
            <p>
                To navigate to your slides you can use the following shortcuts:
            </p>
            <ul>
                <li>
                    <kbd>Arrow Right</kbd> or <kbd>Arrow Down</kbd> to go to the
                    next slide
                </li>
                <li>
                    <kbd>Arrow Left</kbd> or <kbd>Arrow Up</kbd> to go to the
                    previous slide
                </li>
                <li><kbd>Space</kbd> to go to the next slide</li>
                <li><kbd>Backspace</kbd> to go to the previous slide</li>
                <li><kbd>A</kbd> to go to the first slide</li>
                <li><kbd>D</kbd> to go to the last slide</li>
                <li><kbd>F</kbd> to toggle full screen mode</li>
            </ul>
        </section>

        <section>
            <h2>Customization</h2>
            <p>
                You can slightly customize the look of your presentation by
                adding a YAML frontmatter to the beginning of your markdown
                file.
            </p>
            <p>The following options are available:</p>
            <pre>
---
title: Markdown Slides # Metatitle
description: A simple markdown slide deck # Metadescription
color: "#18181b" # Text color
background: "#f4f4f5" # Background color
accent: "#f97316" # Accent color
copyright: "" # Add a copyright line
progress: true # Show progress bar
---
      </pre
            >
        </section>

        <a
            href="https://github.com/frsthvl/inslide"
            class="flex items-center"
            target="_blank"
        >
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="size-6 fill-slate-900"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                ></path>
            </svg>
            Learn more
        </a>
    </div>
</template>
