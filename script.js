// Usamos este evento para asegurarnos de que el HTML ya exista
window.onload = function() {
    console.log("Iniciando sistema...");
    
    // 1. INVENTARIO (Versión corta para probar)
    const inventario = [
        { codigo: "BFMP3.0IMP6H", nombre: "Ø3.0x6mm", sistema: "MP" },
        { codigo: "BFIB3.5 10H", nombre: "3.5x10mm", sistema: "IB" },
        { codigo: "BFHE3.4IMP10H", nombre: "Ø3.3x10mm", sistema: "HE" }
    ];

    let datosCliente = { tipo: "", nombre: "", dni: "" };
    let carrito = {};

    const app = document.getElementById('app');

    // 2. FUNCIONES (Definidas dentro para evitar errores de carga)
    window.mostrarInicio = function() {
        app.innerHTML = `
            <h1>BIOFIX</h1>
            <p>Portal de Pedidos</p>
            <button class="btn-opcion" onclick="formularioLogin('registrado')">YA SOY CLIENTE</button>
            <button class="btn-opcion" onclick="formularioLogin('nuevo')">NUEVO REGISTRO</button>
        `;
    };

    window.formularioLogin = function(tipo) {
        app.innerHTML = `
            <h1>Ingreso</h1>
            <input type="text" id="nombre" placeholder="Nombre y Apellido">
            <input type="number" id="dni" placeholder="DNI">
            <button class="btn-ingresar" onclick="ingresarAlSistema()">INGRESAR</button>
        `;
    };

    window.ingresarAlSistema = function() {
        const n = document.getElementById('nombre').value;
        const d = document.getElementById('dni').value;
        if (n && d) {
            datosCliente.nombre = n;
            datosCliente.dni = d;
            mostrarCategorias();
        } else {
            alert("Completa los datos");
        }
    };

    window.mostrarCategorias = function() {
        app.innerHTML = `
            <p>📍 Dr: ${datosCliente.nombre}</p>
            <h1>Categorías</h1>
            <button class="btn-opcion" onclick="mostrarSistemas()">🦷 IMPLANTES</button>
            <button onclick="mostrarInicio()" style="color:red; background:none; border:none; margin-top:20px;">Cerrar</button>
        `;
    };

    window.mostrarSistemas = function() {
        const sistemas = [...new Set(inventario.map(p => p.sistema))];
        app.innerHTML = `
            <h2>Sistemas</h2>
            ${sistemas.map(sis => `<button class="btn-opcion" onclick="filtrar('${sis}')">${sis}</button>`).join('')}
            <button class="btn-ingresar" onclick="mostrarCategorias()">VOLVER</button>
        `;
    };

    window.filtrar = function(sistemaElegido) {
        const productos = inventario.filter(p => p.sistema === sistemaElegido);
        app.innerHTML = `
            <h2>${sistemaElegido}</h2>
            ${productos.map(p => `
                <div class="tarjeta-producto" style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee;">
                    <span>${p.codigo}</span>
                    <button class="btn-cantidad" onclick="alert('Sumado')">+</button>
                </div>
            `).join('')}
            <button class="btn-ingresar" onclick="mostrarSistemas()">VOLVER</button>
        `;
    };

    // Lanzar la app
    mostrarInicio();
};
