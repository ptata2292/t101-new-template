document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault();
    history.pushState(null, '', event.target.href);
    document.getElementById('content').innerHTML = 'Inicio - Bienvenido a nuestro SPA';
});

document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    history.pushState(null, '', event.target.href);
    document.getElementById('content').innerHTML = 'Acerca de - Aquí hay alguna información sobre nosotros';
});