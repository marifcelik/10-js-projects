const $text = document.querySelector('textarea');
const $preview = document.querySelector('.content');

$text.addEventListener('input', e => {
    const { value } = e.target;
    $preview.innerHTML = marked.parse(value);
})

/* 
    ! Not finished
    * Im so tired
*/