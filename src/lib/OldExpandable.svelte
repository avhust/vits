<script lang="ts">
	import { expandable } from './actions/expandable.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let expanded = false;

	export let cdn = '';
	export let breakpoint: number | false = false;
	let screenWidth = breakpoint;

	export let youtubeVideoId = '';

	function offExpanded(): void {
		expanded = false;
		document.body.classList.remove('noscroll');
	}
	function onExpanded(): void {
		expanded = true;
		document.body.classList.add('noscroll');
	}
	onMount(() => {
		screenWidth = window ? window.innerWidth : breakpoint;
	});
</script>

{#if screenWidth > breakpoint}
	{#if expanded}
		<div
			class="cover"
			on:keypress={offExpanded}
			on:click={offExpanded}
			in:fade={{ duration: 300 }}
		/>
	{/if}
	<div class="poster" use:expandable={expanded} on:expanding={onExpanded} class:expanded>
		<slot />
		{#if expanded && youtubeVideoId}
			<iframe
				class="videoIFrame"
				src="https://www.youtube.com/embed/{youtubeVideoId}?autoplay=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		{/if}
		{#if expanded}
			<div class="closeButton" on:keypress={offExpanded} on:click={offExpanded}>
				<button><img alt="burger icon" src="{cdn}/icons/cross.svg" /></button>
			</div>
		{/if}
	</div>
{:else}
	<slot />
{/if}

<style lang="scss">
	$breakpoint: 768px;
	.cover {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 100;
	}
	:global(.poster:not(.expanded) > *) {
		transition: filter 0.3s ease-in-out;
		cursor: pointer;
		@media (hover: hover) and (pointer: fine) {
			&:hover {
				filter: brightness(1.1);
			}
		}
	}
	.expanded {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 101;
		transition: all 0.2s ease;
		@media screen and (min-width: $breakpoint) {
			left: 3rem;
			right: 3rem;
			bottom: 3rem;
			top: 3rem;
		}
	}
	.videoIFrame {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 200;
		width: 100%;
		height: 100%;
	}
	.closeButton {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 300;

		button {
			--size: 4rem;
			background-color: var(--darkColor);
			border: 4px solid white;
			box-shadow: 0 0 10px black;
			transition: transform 0.3s ease-out;
			transform-origin: center;
			transform: scale(1);
			cursor: pointer;
			img {
				--size: clamp(3rem, 12vw, 4rem);
				height: var(--size);
				width: var(--size);
			}
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
