<script lang="ts">
	export let cdn = '';
	export let path: string = '/i';
	export let image: string = '';
	export let alt = 'placeholder';
	export let height = 200;
	export let width = 200;
	export let x2 = false;
	export let loading: 'lazy' | 'eager' = 'lazy';

	$: format = image.split('.').pop();
	$: name = image.split('.').slice(0, -1);
</script>

{#if image}
	<picture>
		{#if x2}
			<source
				type="image/avif"
				srcset="{cdn}{path}/avif/{name}-1x.avif 1x, {cdn}{path}/avif/{name}.avif 2x"
			/>
			<source
				type="image/webp"
				srcset="{cdn}{path}/webp/{name}-1x.webp 1x, {cdn}{path}/webp/{name}.webp 2x"
			/>
			<img
				{alt}
				src="{cdn}{path}/{format}/{name}.{format}"
				srcset="{cdn}{path}/{format}/{name}-1x.{format} 1x, {cdn}{path}/{format}/{name}.{format} 2x"
				{height}
				{width}
				{loading}
				decoding="async"
			/>
		{:else}
			<source type="image/avif" srcset="{cdn}{path}/avif/{name}.avif" />
			<source type="image/webp" srcset="{cdn}{path}/webp/{name}.webp" />
			<img
				{alt}
				src="{cdn}{path}/{format}/{name}.{format}"
				srcset="{cdn}{path}/{format}/{name}.{format}"
				{height}
				{width}
				{loading}
				decoding="async"
			/>
			<!-- style="content-visibility: auto;" -->
		{/if}
	</picture>
{/if}
