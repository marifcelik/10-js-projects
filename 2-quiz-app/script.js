import Question from "./Question.js";

const labels = document.querySelectorAll('label[for]');
const question = document.getElementById('question');
const corrects = document.querySelector('.corrects h2');
const wrongs = document.querySelector('.wrongs h2');

let current;

// TODO get questions from backend
const questions = [
    new Question('who is the assistant regional manager ?', 'micheal scoot', 'dwight schrute', 'jim halpert', 'kevin', 'b'),
    new Question('what is the best programming language ?', 'javascript', 'python', 'c++', 'java', 'c'),
    new Question('what is the ...?', 'correct answer 1', 'answer 2', 'answer 3', 'answer 4', 'a'),
    new Question('what is the ... 2 ?', 'answer 1', 'answer 2', 'answer 3', 'answer 4', 'd'),
]

window.start = async function (e) {
    e.innerHTML = 'submit';
    e.setAttribute('onclick', 'control()');
    document.querySelector('ul').style.opacity = 1;
    await load();
}

window.control = async function () {
    document.querySelector('input[type="radio"][name="answer"]:checked').value == current.correct ? corrects.innerHTML++ : wrongs.innerHTML++;
    await load();
}

function load() {
    let index = Math.floor(Math.random() * questions.length);
    current = questions[index];

    if (!questions.length) {
        document.querySelector('button').setAttribute('disabled', '');
        document.querySelector('.over').style.opacity = 1;
    } else {
        question.innerText = current.question;
        labels.forEach((label, i) => label.innerHTML = current.answers()[Object.keys(current.answers())[i]]);
        questions.splice(index, 1);
    }
    return new Promise(() => {
        // just for wait this func
    })
}