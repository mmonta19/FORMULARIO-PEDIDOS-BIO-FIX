// Prueba de carga directa
window.onload = function() {
    console.log("Script cargado correctamente");
    const contenedor = document.getElementById('app');
    
    if (contenedor) {
        contenedor.innerHTML = `
            <h1>¡CONEXIÓN EXITOSA!</h1>
            <p>El sistema Biofix está listo para recibir los productos.</p>
            <button onclick="location.reload()" style="padding:10px 20px; background:#005a8d; color:white; border:none; border-radius:5px; cursor:pointer;">
                RECARGAR PRUEBA
            </button>
        `;
    } else {
        console.error("No se encontró el div #app");
    }
};
