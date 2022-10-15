export default class Todo {
    id;
    text;
    done;

    constructor(text, done = false, id = new Date().getTime()) {
        this.text = text;
        this.id = id;
        this.done = done;
    }
}