const main = document.querySelector('#main');
const prt = document.querySelector('#particles-js');
const btn = document.querySelector('.button');

function init() {
  setTimeout(() => {

    const loader = document.getElementById('load');
    loader.href = '';

    main.style.display = 'block';
    btn.style.display = 'inline-block';

    setTimeout(() => (prt.style.opacity = 1), 100);
    setTimeout(() => (btn.style.opacity = 1), 50);
  }, 2400);
}

init();