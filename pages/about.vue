<template>
	<Menu />

	<Head>
		<title>About | Insli.de</title>
		<meta
			name="description"
			content="How to create automatically styled presentations from your markdown files in seconds. Completely free, no registration required."
		/>

		<meta property="og:title" content="About | Insli.de" />
		<meta
			property="og:description"
			content="How to create automatically styled presentations from your markdown files in seconds. Completely free, no registration required."
		/>
		<meta property="og:image" content="https://insli.de/og-image.jpeg" />
		<meta property="og:url" content="https://insli.de/about" />
	</Head>

	<div class="max-w-3xl p-4 mx-auto my-12 prose md:prose-xl">
		<section>
			<h1>About Insli.de</h1>
			<h3>
				Insli.de is a simple presenting tool inspired by
				<a target="_blanc" href="https://simpleslides.dev/"
					>Simple Slides</a
				>
				to turn every remote markdown file into an auto-styled
				presentation without storing any information.
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
					>https://insli.de/&lt;encoded-url.md&gt;</span
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
	</div>

	<Footer />
</template>
