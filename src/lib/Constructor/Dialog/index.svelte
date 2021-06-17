<script lang="ts">
	import { AddStepButton } from '../../../entity/Button';
	import { TextStep, QuestionStep } from '../../../entity/Step';
	import { dialogs } from '$lib/Constructor/store';
	import StepButton from '$lib/Constructor/Button/index.svelte';
	import StepsDragList from './DndList.svelte';

	export let id;
	const dialog = dialogs[id];

	const buttons = [
		new AddStepButton(
			TextStep,
		{
			title: "Text",
			icon: "/icons/text.svg",
			bg: "#809fde",
			placeholder: "Text",
			component: 'textStep',
		}),
		new AddStepButton(
			QuestionStep,
		{
			title: "Question",
			icon: "/icons/question.svg",
			bg: "#4fce5d",
			placeholder: "Question",
			component: 'questionStep',
		})
	];

</script>

<StepsDragList dndList={$dialog} dialogId={id} />
<div class="buttons-wr">
	{#each buttons as button}
		<StepButton button={button} dialogId={id} />
	{/each}
</div>

<style>
	.buttons-wr {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		margin-bottom: 35px;
		width: 200px;
		margin: auto;
	}
</style>
