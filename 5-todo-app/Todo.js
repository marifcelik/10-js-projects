export default class Todo {
    id;
    text;
    done;

    constructor(id = new Date().getTime(), text, done = false) {
        this.id = id;
        this.text = text;
        this.done = done;
    }
}