<template>
	<Menu />

	<Head>
		<title>Create Slides | Insli.de</title>
		<meta
			name="description"
			content="Create a new presentation from your markdown file. Completely free, no registration required."
		/>

		<meta property="og:title" content="Create Slides | Insli.de" />
		<meta
			property="og:description"
			content="Create a new presentation from your markdown file. Completely free, no registration required."
		/>
		<meta property="og:image" content="https://insli.de/og-image.jpeg" />
		<meta property="og:url" content="https://insli.de/new" />
	</Head>

	<div class="max-w-3xl p-4 mx-auto my-12 prose md:prose-xl">
		<h1>Create a new presentation</h1>
		<p>
			Simply insert a url to a markdown file. View the
			<NuxtLink to="/about" class="underline"
				>instructions for help</NuxtLink
			>.
		</p>
		<NewSlides />
	</div>

	<Footer />
</template>
