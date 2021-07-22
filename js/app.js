import * as UI from './interfaz.js';
import API from './api.js';


// Event Listeners
UI.formularioBuscar.addEventListener('submit', buscarCancion);


// Funciones
function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        UI.divMensajes.classList.add('error');
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    // Consultar la API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

}

