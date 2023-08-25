<script>
	import { newData } from '../../store';

	export let repeat;

	const { box_id, sentences } = repeat;

	// let newSentence = '';

	// let isOnNewSentence = {
	// 	toggle: false,
	// 	id: ''
	// };

	// function openInputForSentence(obj, box_id) {
	// 	obj.id = box_id;
	// 	obj.toggle = true;

	// 	isOnNewSentence = obj;
	// }
	// function addNewSentence(data, box_id, sentence) {
	// 	if (!sentence) return;

	// 	data.find((box) => {
	// 		if (box.box_id == box_id) {
	// 			const Last_ID = box.sentences[box.sentences.length - 1]?.id;
	// 			const newId = Last_ID ? Last_ID + 1 : 1;
	// 			const newSentence = sentence;
	// 			box.sentences.push({ text: newSentence, id: newId });
	// 		}
	// 	});

	// 	$newData = $newData;

	// 	newSentence = '';
	// }

	function isOnClickHandler() {
		console.log('handler');
	}
</script>


 <div class="gap-3">
	<div>Day : {repeat.repeat.count}</div>
	<div>Box : {box_id}</div>
 </div>
 <div id="{box_id}" class="border-2 border-green-500 p-2">
	{#each sentences as {text,id}}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div {id} class="border" contenteditable="true" bind:textContent={text} on:mousedown={isOnClickHandler}></div>
	{/each}
 </div>
