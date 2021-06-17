<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/bot.json');

		if (res.ok) {
			const config = await res.json();

			return {
				props: { config }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import Constructor from '$lib/Constructor/index.svelte';

	type Config = {
		example: number;
	};

	export let config;

</script>

<svelte:head>
	<title>Bot constructor</title>
</svelte:head>

<div>
	<h1>Bot constructor</h1>
	<Constructor config={config}/>
</div>
