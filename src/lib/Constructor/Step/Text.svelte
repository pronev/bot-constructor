<script lang="ts">
	import { dialogs } from '$lib/Constructor/store';

	export let dialogId;
	export let step;
	
	const remove = () => {
    dialogs[dialogId].remove(step.id);
  }

</script>

<div class="card-icon" style="background: {step.bg}">
	<img src={step.icon} alt="">
</div>
<p class="card-title">{step.title}</p>
<input
	placeholder={step.placeholder}
	class="card-input"
	on:keyup={() => {$dialogs = $dialogs}}
	bind:value={step.login}
>
<span class="card-close" on:click={remove}>
	<img class="card-close__img" src="/close.svg" alt="">
</span>


<style>
	.card-icon {
		border-radius: 5px;
		width: 60px;
		height: 60px;
		margin: 10px;
	}
	.card-icon > img {
		width: 100%;
	}
	.card-title {
		color: #A5D5F5;
		margin-left: 14px;
		margin-right: 14px;
		width: 120px;
		font-size: 18px;
		font-weight: 600;
	}
	.card-input {
		height: 28px;
		border: none;
		background: #eaf3fa;
		color: #333;
		outline: none;
    padding: 5px 17px;
    border-radius: 3px;
	}
	.card-close {
		cursor: pointer;
    position: absolute;
    right: 0px;
	}
	.card-close__img {
		width: 34px;
		height: 34px;
		margin-right: 16px;
	}
	.card-close__img:hover {
		opacity: 0.4;
	}
</style>