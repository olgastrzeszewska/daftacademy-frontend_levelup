export function loadDate () {
    var year = new Date().getFullYear();
    const date = document.querySelector('.footer__item--year');
    date.innerHTML += year;
}