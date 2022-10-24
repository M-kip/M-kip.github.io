const questions = [...document.querySelectorAll('.question_wrap')];

questions.map((question) => {
    let quest_text = question.querySelector('h3');
    quest_text.addEventListener('click', () => {
        questions.filter((q) => q !== question).map((q) => q.classList.remove('open'));
        question.classList.toggle('open');
    });
});