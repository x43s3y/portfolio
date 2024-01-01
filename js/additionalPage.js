let openingPage = document.getElementsByClassName('opening-page')[0];
let secondPage = document.getElementsByClassName('second-page')[0];
let upButtonEl = document.getElementsByClassName('up-button')[0];
let mainEl = document.querySelector('.main')

downButtonEl.addEventListener('click', () => {
    openingPage.remove();
    upButtonEl.classList.remove('gone');
    secondPage.classList.remove('gone');


});


//bring back main page
upButtonEl.addEventListener('click', () => {
    upButtonEl.classList.add('gone');
    secondPage.classList.add('gone');

    setTimeout(() => {
        mainEl.insertAdjacentElement('afterbegin', openingPage);
        console.log(mainEl);
    }, 200);
});