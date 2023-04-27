let btnThemeLight = document.querySelector('#btnThemeLight');
let btnThemeDark = document.querySelector('#btnThemeDark');
let btnSelectTheme = document.querySelector("#btnSelectTheme");

btnThemeLight.addEventListener('click', ()=> cambiarTema('light'));
btnThemeDark.addEventListener('click', ()=>cambiarTema('dark'));

let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
cambiarTema(temaConfigurado);

function cambiarTema(color){
    document.querySelector('html').setAttribute('data-bs-theme', color);

    localStorage.setItem('tema', JSON.stringify(color));

    if (color === "light") {
        btnSelectTheme.classList.remove("bi-moon-stars-fill");
        btnSelectTheme.classList.add("bi-brightness-high-fill");
    } else if (color ==="dark") {
        btnSelectTheme.classList.remove("bi-brightness-high-fill");
        btnSelectTheme.classList.add("bi-moon-stars-fill");
    }
}