const main = document.querySelector('#main');
const prt = document.querySelector('#particles-js');
const btn = document.querySelector('.button');
const loader = document.getElementById('load');

function init() {
  setTimeout(() => {
    loader.href = '';

    main.style.display = 'block';
    btn.style.display = 'inline-block';

    setTimeout(() => (prt.style.opacity = 1), 100);
    setTimeout(() => (main.style.opacity = 1), 100);
    setTimeout(() => (btn.style.opacity = 1), 50);
  }, 2200);
}

main.addEventListener("load", init());

