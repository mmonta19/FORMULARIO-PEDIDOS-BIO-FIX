window.onload = function() {
    // 1. BASE DE DATOS COMPLETA
    const inventario = [
        // SISTEMA MP (Celeste)
        { codigo: "BFMP3.0IMP6H", nombre: "Ø3.0x6mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP8H", nombre: "Ø3.0x8mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP10H", nombre: "Ø3.0x10mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP115H", nombre: "Ø3.0x11.5mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP13H", nombre: "Ø3.0x13mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP15H", nombre: "Ø3.0x15mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP18H", nombre: "Ø3.0x18mm", sistema: "MP" },
        { codigo: "BFMP3.0IMP20H", nombre: "Ø3.0x20mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP6H", nombre: "Ø3.5x6mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP8H", nombre: "Ø3.5x8mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP10H", nombre: "Ø3.5x10mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP11.5H", nombre: "Ø3.5x11.5mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP13H", nombre: "Ø3.5x13mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP15H", nombre: "Ø3.5x15mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP18H", nombre: "Ø3.5x18mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP20H", nombre: "Ø3.5x20mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP6H", nombre: "Ø4.0x6mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP8H", nombre: "Ø4.0x8mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP10H", nombre: "Ø4.0x10mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP11.5H", nombre: "Ø4.0x11.5mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP13H", nombre: "Ø4.0x13mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP15H", nombre: "Ø4.0x15mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP18H", nombre: "Ø4.0x18mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP20H", nombre: "Ø4.0x20mm", sistema: "MP" },
        // SISTEMA CMU (Fucsia)
        { codigo: "BFCMU3.0 IMP 6H", nombre: "Ø3.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 8H", nombre: "Ø3.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.5 IMP 10H", nombre: "Ø3.5x10mm", sistema: "CMU" },
        // SISTEMA C3MU (Sub-opción)
        { codigo: "BFCMU3.0IMP6H C3", nombre: "Ø3.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP8H C3", nombre: "Ø3.5x8mm C3", sistema: "C3MU" },
        // SISTEMA HE (Verde)
        { codigo: "BFHE3.4IMP85H", nombre: "Ø3.3x8.5mm", sistema: "HE" },
        // SISTEMA HI (Rojo)
        { codigo: "BFHI3.3IMP6.5H", nombre: "Ø3.3x6.5mm", sistema: "HI" },
        // SISTEMA CMHI (Violeta)
        { codigo: "BFCM3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "CMHI" }
    ];

    let datosCliente = { tipo: "", nombre: "", dni: "", matricula: "", localidad: "", provincia: "" };
    let carrito = {};
    const app = document.getElementById('app');

    const coloresSistemas = {
        "MP": "color-mp", "CMU": "color-cmu", "C3MU": "color-cmu", 
        "HE": "color-he", "HI": "color-hi", "BASAL": "color-basal", "CMHI": "color-cmhi"
    };

    function obtenerTotalItems() {
        return Object.values(carrito).reduce((a, b) => a + b, 0);
    }

    // --- PANTALLA INICIAL ---
    window.mostrarInicio = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1><p>Professional Implant Systems</p></div>
            <div class="nav-container" style="justify-content: center;">
                <div style="font-weight:800;">BIENVENIDO</div>
            </div>
            <div style="padding: 20px; display: grid; gap: 15px;">
                <button class="btn-opcion" onclick="formularioLogin('registrado')">👨‍⚕️ Cliente Registrado</button>
                <button class="btn-opcion" onclick="formularioLogin('nuevo')">✨ Registro Nuevo</button>
            </div>
        `;
    };

    // --- FORMULARIO ---
    window.formularioLogin = function(tipoElegido) {
        datosCliente.tipo = tipoElegido;
        let camposExtra = tipoElegido === 'nuevo' ? `
            <input type="text" id="matricula" placeholder="Matrícula Profesional">
            <input type="text" id="localidad" placeholder="Localidad">
            <input type="text" id="provincia" placeholder="Provincia">
        ` : '';

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarInicio()" style="border:none; background:none; cursor:pointer;">←</button>
                <div style="text-align:center">
                    <small style="color:#007bff; font-weight:bold; font-size:10px;">BIO-FIX PORTAL</small>
                    <div style="font-weight:800;">${tipoElegido === 'nuevo' ? 'REGISTRO' : 'INGRESO'}</div>
                </div>
                <div class="badge-pedido">0</div>
            </div>
            <div class="card-login">
                <input type="text" id="nombre" placeholder="Nombre y Apellido">
                <input type="number" id="dni" placeholder="DNI">
                ${camposExtra}
            </div>
            <button class="btn-principal" onclick="ingresarAlSistema()">INGRESAR</button>
        `;
    };

    // --- LOGICA DE INGRESO ---
    window.ingresarAlSistema = function() {
        const n = document.getElementById('nombre').value;
        const d = document.getElementById('dni').value;

        if (n && d) {
            datosCliente.nombre = n;
            datosCliente.dni = d;
            
            if (datosCliente.tipo === 'nuevo') {
                datosCliente.matricula = document.getElementById('matricula').value;
                datosCliente.localidad = document.getElementById('localidad').value;
                datosCliente.provincia = document.getElementById('provincia').value;
            }
            mostrarCategorias();
        } else {
            alert("Por favor, completa Nombre y DNI");
        }
    };

    window.mostrarCategorias = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <div></div>
                <div style="text-align:center">
                    <small style="color:#007bff; font-weight:bold; font-size:10px;">HOLA DR.</small>
                    <div style="font-weight:800; text-transform:uppercase;">${datosCliente.nombre}</div>
                </div>
                <button onclick="mostrarInicio()" style="border:none; background:none; font-size:20px;">×</button>
            </div>
            <div style="padding: 20px; display: grid; gap: 15px;">
                <button class="btn-opcion" onclick="mostrarSistemas()">📦 Implantes</button>
                <button class="btn-opcion" onclick="alert('Próximamente')">🛠️ Componentes</button>
            </div>
        `;
    };

    window.mostrarSistemas = function() {
        const sistemasDisplay = ["MP", "CMU", "HE", "HI", "BASAL", "CMHI"];
        let htmlBotones = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 20px;">`;
        
        sistemasDisplay.forEach(sis => {
            const claseColor = coloresSistemas[sis] || "";
            htmlBotones += `
                <button class="btn-opcion" onclick="filtrar('${sis}')" style="height: 70px;">
                    <span class="sistema-label ${claseColor}">SISTEMA</span><br>
                    <span>${sis}</span>
                </button>
            `;
        });

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-
