<script lang="ts">
	import type { AddStepButton } from '../../../entity/Button';
	import { dialogs } from '$lib/Constructor/store';

	export let button: AddStepButton;
	export let dialogId;
	
	let dialog = dialogs[dialogId];

	const buttonOptions = button.options;
	const addStep = () => {
		dialog.add(button);
  }

</script>

<button
	style="background: {buttonOptions.bg}"
	title={buttonOptions.title}
	on:click={addStep} 
>
	<img src={buttonOptions.icon} alt="">
	<span>{buttonOptions.title}</span>
</button>


<style>
	button {
		border-radius: 5px;
		border: none;
		width: 50px;
		height: 50px;
		margin: 25px 5px;
		cursor: pointer;
		position: relative;
		padding: 0;
		box-shadow: 6px 5px 6px #333;
	}
	button > img {
		width: 70%;
	}
	button > span {
		position: absolute;
		bottom: -25px;
		left: 0;
		right: 0;
		color: #98C3E8;
		font-size: 15px;
		font-weight: bold;
	}
</style>