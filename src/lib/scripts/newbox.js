
import { v4 as uuidv4 } from 'uuid';




export class Box {
    constructor() {
        this.sentences = [];
        this.repeat = {
            count: 1,
            // date: createRepeatDate(),
            date: '2023-08-23',
            type: 'weekly'
        };
        this.created_at = new Date().toJSON();
        this.box_id = uuidv4();
    }
}





