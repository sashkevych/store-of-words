export async function close_event_handler(newData, oldData, workLog, oldWorkLog) {
	const changes = await areThereAnyChanges(newData, oldData);
	const workLogChanges = await areThereAnyChanges(workLog, oldWorkLog);
	if (changes[0]) {
		await sendPut(changes, 'updateWeekly', newData);
	}
	if (workLogChanges[0]) await sendPut(workLogChanges, 'updateWorkLog', workLog);

	return null;
}
function removeWhiteSpace(newArr) {
	const res = newArr.filter((box) => {
		const onlyWithText = box.sentences.filter((sentence, i, arr) => {
			const IsEmpty = sentence?.text.replace(/&nbsp;/g, '');

			// sentence.text = IsEmpty;

			return {
				text: IsEmpty,
				id: sentence.id
			};
		});
		onlyWithText.forEach((sentence, index, arr) => {
			sentence.id = index + 1;
		});
		box.sentences = onlyWithText;

		return box;
	});
	return res;
}
function areThereAnyChanges(newArr, oldArr) {
	const changes = removeWhiteSpace(newArr).filter((el, i) => {
		const el1 = el.sentences;
		const el2 = oldArr[i].sentences;
		const isAnyChange = el1.some((el, i, arr) => {
			// if (!el2[i]?.text) return true;
			// if (!el.text) return true;
			if (el.text != el2[i].text) return true;
			if (el2[i + 1]?.text && !arr[i + 1]?.text) return true;
			return false;
		});

		if (isAnyChange) return el;
	});
	return changes;
}

async function sendPut(changes, action, content) {
	await fetch(`http://localhost:5173/gcp/?action=${action}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ changes, content })
	});
}
