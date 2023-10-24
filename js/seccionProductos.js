window.onload = function () {
    let filtros = document.getElementById("filtros");
    let contador = 0;
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        
        filtros.style.marginTop = value * 1 + 'px';

    });
};