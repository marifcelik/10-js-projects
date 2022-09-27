export default class Question {
    #question;
    #a;
    #b;
    #c;
    #d;
    #correct;

    constructor(question, a, b, c, d, correct) {
        this.#question = question;
        this.#a = a;
        this.#b = b;
        this.#c = c;
        this.#d = d;
        this.#correct = correct;
    }

    get question() {
        return this.#question;
    }

    get a() {
        return this.#a;
    }

    get b() {
        return this.#b;
    }

    get c() {
        return this.#c;
    }

    get d() {
        return this.#d;
    }

    get correct() {
        return this.#correct;
    }
}

Question.prototype.answers = function () {
    return {
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d
    }
}
