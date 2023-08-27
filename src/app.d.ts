// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Session { }

		interface Stuff { }
	}
	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:expanding'?: (event: CustomEvent) => void
			'on:swiperight'?: () => void
			'on:swipeleft'?: () => void
			'on:outclick'?: () => void
		}
	}
}
export { }