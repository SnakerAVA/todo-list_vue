let _id = 0;
export default class Todo {
    constructor(data) {
        this.id = _id++;
        this.task = data.task;
        this.difficult = data.difficult;
        this.isDone = data.isDone || false;
    }
}