<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import TextStep from '$lib/Constructor/Step/Text.svelte';
	import QuestionStep from '$lib/Constructor/Step/Question.svelte';
	
	export let dialogId;
	export let dndList;

	const components = {
		textStep: TextStep,
		questionStep: QuestionStep
	};
	
	const flipDurationMs = 200;
	let dragDisabled = true;

	function handleConsider(e) {
		dndList = e.detail.items;
	}

	function handleFinalize(e) {
		dndList = e.detail.items;
		dragDisabled = true;
	}

	function startDrag(e) {
		e.preventDefault();
		dragDisabled = false;
	}

	function transformDraggedElement(draggedEl) {
		let elem = draggedEl.querySelector(".card");
		elem.style.transform = "rotate(1deg)";
		elem.style.boxShadow = "2px 3px 4px 2px rgba(0, 0, 0, .14)";
	}
</script>

<section use:dndzone={{items: dndList, dragDisabled, flipDurationMs, transformDraggedElement}} on:consider={handleConsider} on:finalize={handleFinalize}>
	{#each dndList as listItem(listItem.id)}
		<div class="group" animate:flip="{{duration: flipDurationMs}}">
			<div class="card">
				<div
					class="handle" 
					aria-label="drag-handle"
					tabindex={dragDisabled? 0 : -1} 
					style={dragDisabled? 'cursor: grab' : 'cursor: grabbing'}
					on:mousedown={startDrag}
					on:touchstart={startDrag}
				/>
					{listItem.step.id}
					<svelte:component this={components[listItem.component]} dialogId={dialogId} step={listItem.step}/>
			</div>
		</div>
	{/each}
</section>


<style>
	section {
		outline: none!important;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	div.group {
		margin-bottom: 12px;
		margin-top: 12px;
	}
	div.card {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: center;
		align-items: center;
		background: #fff;
		border-radius: 10px;
		border: 1px solid rgba(255,255,255,0.2);
		box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		min-height: 96px;
		width: 100%;
	}
	.handle {
		margin: 13px;
		width: 34px;
		height: 34px;
		background: url("/grab.svg") no-repeat center / 100%;
	}
	.handle:hover {
		opacity: 0.4;
	}
</style>