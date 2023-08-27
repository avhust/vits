<script lang="ts">
	import OldExpandable from '$lib/OldExpandable.svelte';
	import OldPicture from '$lib/OldPicture.svelte';
	import OldSlideShow from '$lib/OldSlideShow.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<OldExpandable cdn="https://cdn.skystudio.uz.ua/old">
		<OldSlideShow
			cdn="https://cdn.skystudio.uz.ua/old"
			width={1280}
			height={852}
			x2={true}
			slides={3}
			path="/i/fotozony/zal1"
		/>
	</OldExpandable>
</div>
<div>
	<OldExpandable cdn="https://cdn.skystudio.uz.ua/old">
		<OldPicture
			cdn="https://cdn.skystudio.uz.ua/old"
			x2={false}
			width={960}
			height={1280}
			loading="eager"
			path="/i/news/20.07.2023"
			image="photo1.jpg"
		/>
	</OldExpandable>
</div>
