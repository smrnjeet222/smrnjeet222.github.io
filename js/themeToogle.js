document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('lght')){
            themeStylesheet.href = 'css/styles.css';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/lght.css';
        }

        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})