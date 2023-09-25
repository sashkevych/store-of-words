import { v4 as uuidv4 } from 'uuid';

export function createBox() {
	const box = {
		sentences: [{ text: '', id: 1 }],
		repeat: {
			count: 1,
			date: '2023-1-11',
			type: 'weekly',
		},
		created_at: new Date().toJSON(),
		box_id: uuidv4()
	};

	return box;
}
