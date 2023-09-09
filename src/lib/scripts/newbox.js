import { v4 as uuidv4 } from 'uuid';


export function createBox() {
	const box = {
		sentences: [],
		repeat: {
			count: 1,
			date: '0000-00-00',
			type: 'weekly'
		},
		created_at: new Date().toJSON(),
		box_id: uuidv4()
	};

    return box
}
