window.onload = function () {
    window.addEventListener('resize', function () {
        const img = document.getElementById("img_fiesta");
        const pantallaWidth = window.innerWidth;
        console.log(pantallaWidth);

        if (pantallaWidth <= 950) {
            img.src = "../img/index/fiesta_resulse.png";
        } else {
            img.src = "../img/index/fiesta.png";
        }
    });

    document.getElementById("inicio").addEventListener('click', function () {
        window.location.href = "./../html/index.html";
    });
    document.getElementById("perros").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("gatos").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("pajaros").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("peces").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("roedores").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("granja").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });
    document.getElementById("ofertas").addEventListener('click', function () {
        window.location.href = "./../html/seccionProductos.html";
    });

    document.getElementById("quienes_somos").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("empleo").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("investor_relations").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("aviso_legal").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("formulario_sistimiento").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("contacto").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
    document.getElementById("proteccion_datos").addEventListener('click', function () {
        window.location.href = "./../html/sobreNosotros.html";
    });
};
