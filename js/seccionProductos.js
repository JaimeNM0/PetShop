window.onload = function () {
    let filtros = document.getElementById("filtros");
    let marca = document.getElementById("img_marca");
    let categoria = document.getElementById("img_categorias");
    let descuento = document.getElementById("img_descuentos");
    let precio = document.getElementById("img_precio");
    let enviado = document.getElementById("img_enviado");
    let tamano = document.getElementById("img_tamano");
    let edad = document.getElementById("img_edad");
    let raza = document.getElementById("img_razas");
    let sabor = document.getElementById("img_sabores");
    let material = document.getElementById("img_material");
    let color = document.getElementById("img_color");

    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        //filtros.style.marginTop = value * 1 + 'px';
    });

    marca.addEventListener('click', () => {
        var div = document.getElementById("filtros_marcas");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            marca.src = "../img/icono/desplegable.png" : marca.src = "../img/icono/desplegable_al_reves.png";
    });

    categoria.addEventListener('click', () => {
        var div = document.getElementById("filtros_categorias");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            categoria.src = "../img/icono/desplegable.png" : categoria.src = "../img/icono/desplegable_al_reves.png";
    });

    descuento.addEventListener('click', () => {
        var div = document.getElementById("filtros_descuentos");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            descuento.src = "../img/icono/desplegable.png" : descuento.src = "../img/icono/desplegable_al_reves.png";
    });

    precio.addEventListener('click', () => {
        var div = document.getElementById("filtros_precio");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            precio.src = "../img/icono/desplegable.png" : precio.src = "../img/icono/desplegable_al_reves.png";
    });

    enviado.addEventListener('click', () => {
        var div = document.getElementById("filtros_enviado");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            enviado.src = "../img/icono/desplegable.png" : enviado.src = "../img/icono/desplegable_al_reves.png";
    });

    tamano.addEventListener('click', () => {
        var div = document.getElementById("filtros_tamano");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            tamano.src = "../img/icono/desplegable.png" : tamano.src = "../img/icono/desplegable_al_reves.png";
    });

    edad.addEventListener('click', () => {
        var div = document.getElementById("filtros_edad");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            edad.src = "../img/icono/desplegable.png" : edad.src = "../img/icono/desplegable_al_reves.png";
    });

    raza.addEventListener('click', () => {
        var div = document.getElementById("filtros_razas");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            raza.src = "../img/icono/desplegable.png" : raza.src = "../img/icono/desplegable_al_reves.png";
    });

    sabor.addEventListener('click', () => {
        var div = document.getElementById("filtros_sabores");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            sabor.src = "../img/icono/desplegable.png" : sabor.src = "../img/icono/desplegable_al_reves.png";
    });

    material.addEventListener('click', () => {
        var div = document.getElementById("filtros_material");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            material.src = "../img/icono/desplegable.png" : material.src = "../img/icono/desplegable_al_reves.png";
    });

    color.addEventListener('click', () => {
        var div = document.getElementById("filtros_color");
        div.classList.toggle("oculto");
        div.classList.contains("oculto") ?
            color.src = "../img/icono/desplegable.png" : color.src = "../img/icono/desplegable_al_reves.png";
    });
};