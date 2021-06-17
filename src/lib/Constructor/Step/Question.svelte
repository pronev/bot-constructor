<script lang="ts">
	import { dialogs } from '$lib/Constructor/store';
	import Dialog from '$lib/Constructor/Dialog/index.svelte';

	export let dialogId;
	export let step;

	let activeItem = 0;
	function selectItem(i) {
		activeItem = i;
	}
	
	const remove = () => {
    dialogs[dialogId].remove(step.id);
  }

	function addAnswer() {
		step.answers.push({text: '', goto: null, dialog: null});
		step.answers = step.answers;
	}

	function addGoto(i) {
		step.answers[i].goto = '';
		step.answers[i].dialog = null;
		//dialogs.remove(step.answers[i].dialog);
	}

	function addDialog(i) {
		step.answers[i].dialog = dialogs.add();
		step.answers[i].goto = null;
	}

</script>

<div class="card-icon" style="background: {step.bg}">
	<img src={step.icon} alt="">
</div>
<p class="card-title">{step.title}</p>
<input
	placeholder={step.placeholder}
	class="question-input"
	on:keyup={() => {$dialogs = $dialogs}}
	bind:value={step.question}
>
<button on:click={addAnswer}>Add answer</button>
<div class="answer-wr">
	<ul>
		{#each step.answers as answer, i}
		<li class={activeItem === i ? 'active' : ''}>
			<span on:click={() => {selectItem(i)}}>Answer {i+1}</span>
		</li>
		{/each}
	</ul>
{#each step.answers as answer, i}
	{#if activeItem === i}
	<div class="box">
		<input
			placeholder="Answer"
			class="answer-input"
			bind:value={answer.text}
		>
	{#if step.answers[i].goto === null}
		<button on:click={() => {addGoto(i)}}>Add goto</button>
	{/if}
	{#if step.answers[i].dialog === null}
		<button on:click={() => {addDialog(i)}}>Add dialog</button>
	{/if}
	{#if step.answers[i].goto !== null}
		<input
			placeholder="Go to step"
			class="goto-input"
			bind:value={answer.goto}
		>
	{/if}
	{#if step.answers[i].dialog !== null}
		<Dialog id={step.answers[i].dialog}/>
	{/if}
	</div>
	{/if}
{/each}
</div>
<span class="card-close" on:click={remove}>
	<img class="card-close__img" src="/close.svg" alt="">
</span>


<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #dee2e6;
    border-radius: 0 0 .5rem .5rem;
    border-top: 0;
	}
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
	li {
		margin-bottom: -1px;
	}
	li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  li > span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  li > span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

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
	.question-input {
		height: 28px;
		border: none;
		background: #eaf3fa;
		color: #333;
		outline: none;
    padding: 5px 17px;
    border-radius: 3px;
	}
	.answer-input {
		height: 28px;
		border: none;
		background: #eaf3fa;
		color: #333;
		outline: none;
    padding: 5px 17px;
    border-radius: 3px;
		margin-right: 5px;
	}
	.goto-input {
		height: 28px;
		width: 40px;
		border: none;
		background: #eaf3fa;
		color: #333;
		outline: none;
    padding: 5px 17px;
    border-radius: 3px;
		margin-right: 5px;
	}
	.answer-wr {
		width: 100%;
		padding: 20px 10px;
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
	button {
		margin-left: 8px;
    height: 38px;
    background: #eaf3fa;
    border: none;
    cursor: pointer;
    border-radius: 5px;
	}
</style>