import * as fs from 'node:fs/promises';

const content = {name:'Aleksandr', age: 26, sentence: ['Hello','World','!']};


export async function writeSevenFiles(collection) {
	collection.forEach(async(fileName) => {
		await fs.writeFile(`${fileName}.json`, JSON.stringify(content), (err) => {
			if (err) {
				console.error(err);
			}
			// file written successfully
		});
	});

	console.log('file written successfully');
}



export async function deleteSevenFiles(collection) {
	collection.forEach(async(fileName) => {
		await fs.unlink(`${fileName}.json`)
	});

	console.log('files deleted successfully');
}


