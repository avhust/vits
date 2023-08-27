<script>
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';

	// Fill the context store when we add a slide
	let slides = getContext('slides');
	let currentIndex = getContext('currentIndex');
	let slideIndex = $slides.length;
	$slides = [...$slides, { idx: slideIndex }];

	// Only display the current slide
	$: hidden = $currentIndex != slideIndex;
	$: preload =
		Math.abs($currentIndex - slideIndex) === 1 ||
		Math.abs($currentIndex - $slides.length - slideIndex) === 1;
</script>

{#if !hidden}
	<div in:fade>
		<slot />
	</div>
{/if}
{#if preload}
	<div class="preload">
		<slot />
	</div>
{/if}

<style lang="scss">
	.preload {
		height: 10px;
		width: 10px;
		overflow: hidden;
		position: absolute;
		opacity: 0;
	}
	// .hidden {
	// 	display: none;
	// }
	$breakpoint: 768px;
	div {
		overflow-x: hidden;
		width: 100%;
		height: 100%;
		@media screen and (min-width: 768px) {
			overflow-y: hidden;
		}
	}
</style>
