import * as fs from 'node:fs/promises';

const content = {name:'Aleksandr', age: 26, sentence: ['Hello','World','!']};

export async function asd() {
	await fs.writeFile('./new_files/test.json', JSON.stringify(content), (err) => {
		if (err) {
			console.error(err);
		}
		// file written successfully
	});
    console.log('file written successfully');
}
