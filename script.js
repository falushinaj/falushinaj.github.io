'use strict';
const btn = document.querySelector('.btn-denis'),
    item = document.querySelector('.popup');
btn.addEventListener('click', () => {
    item.classList.remove('visually-hidden');
})