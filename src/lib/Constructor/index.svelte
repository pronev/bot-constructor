<script lang="ts">
	import { dialogs } from '$lib/Constructor/store';
	import Dialog from './Dialog/index.svelte';

	export let config;
	let id = dialogs.add();
</script>

<Dialog id={id} />