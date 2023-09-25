function label(count) {
	if (count == 1) return 'First';
	if (count == 2) return 'Second';
	if (count == 3) return 'Third';
	if (count == 4) return 'Fourth';
	if (count == 5) return 'Fifth';
	if (count == 6) return 'Sixth';
	if (count == 7) return 'Seventh';
}
export function addLabels(boxes) {
	const res = boxes.map((box) => {
		box.repeat.label = label(box.repeat.count);
		return box;
	});
	return res;
}
