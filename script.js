window.onload = function() {
    // 1. BASE DE DATOS COMPLETA
    const inventario = [
        // SISTEMA MP
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
        { codigo: "BFMP3.5IMP11,5H", nombre: "Ø3.5x11.5mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP13H", nombre: "Ø3.5x13mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP15H", nombre: "Ø3.5x15mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP18H", nombre: "Ø3.5x18mm", sistema: "MP" },
        { codigo: "BFMP3.5IMP20H", nombre: "Ø3.5x20mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP6H", nombre: "Ø4.0x6mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP8H", nombre: "Ø4.0x8mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP10H", nombre: "Ø4.0x10mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP11,5H", nombre: "Ø4.0x11.5mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP13H", nombre: "Ø4.0x13mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP15H", nombre: "Ø4.0x15mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP18H", nombre: "Ø4.0x18mm", sistema: "MP" },
        { codigo: "BFMP4.0IMP20H", nombre: "Ø4.0x20mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP6H", nombre: "Ø4.5x6mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP8H", nombre: "Ø4.5x8mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP10H", nombre: "Ø4.5x10mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP11,5H", nombre: "Ø4.5x11.5mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP13H", nombre: "Ø4.5x13mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP15H", nombre: "Ø4.5x15mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP18H", nombre: "Ø4.5x18mm", sistema: "MP" },
        { codigo: "BFMP4.5IMP20H", nombre: "Ø4.5x20mm", sistema: "MP" },
        { codigo: "BFMP5.0IMP6H", nombre: "Ø5.0x6mm", sistema: "MP" },
        { codigo: "BFMP5.0IMP8H", nombre: "Ø5.0x8mm", sistema: "MP" },
        { codigo: "BFMP5.0IMP10H", nombre: "Ø5.0x10mm", sistema: "MP" },
        { codigo: "BFMP5.0IMP11,5H", nombre: "Ø5.0x11.5mm", sistema: "MP" },
        { codigo: "BFMP5.0IMP13H", nombre: "Ø5.0x13mm", sistema: "MP" },
        { codigo: "BFMP5.5IMP6H", nombre: "Ø5.5x6mm", sistema: "MP" },
        { codigo: "BFMP5.5IMP8H", nombre: "Ø5.5x8mm", sistema: "MP" },
        { codigo: "BFMP5.5IMP10H", nombre: "Ø5.5x10mm", sistema: "MP" },
        { codigo: "BFMP5.5IMP11,5H", nombre: "Ø5.5x11.5mm", sistema: "MP" },
        { codigo: "BFMP5.5IMP13H", nombre: "Ø5.5x13mm", sistema: "MP" },

        // SISTEMA CMU
        { codigo: "BFCMU3.0 IMP 6H", nombre: "Ø3.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 8H", nombre: "Ø3.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 10H", nombre: "Ø3.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 6H", nombre: "Ø3.5x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 8H", nombre: "Ø3.5x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 10H", nombre: "Ø3.5x10mm", sistema: "CMU" },

        // SISTEMA C3MU
        { codigo: "BFCMU3.0IMP6H C3", nombre: "Ø3.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP8H C3", nombre: "Ø3.0x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP10H C3", nombre: "Ø3.0x10mm C3", sistema: "C3MU" },

        // SISTEMA HE
        { codigo: "BFHE3.4IMP85H", nombre: "Ø3.3x8.5mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP10H", nombre: "Ø3.3x10mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP6H", nombre: "Ø4.0x6mm", sistema: "HE" },

        // SISTEMA HI
        { codigo: "BFHI3.3IMP6.5H", nombre: "Ø3.3x6.5mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "HI" },

        // SISTEMA CMHI
        { codigo: "BFCM3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP10H", nombre: "Ø3.3x10mm", sistema: "CMHI" }
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
    window.formularioLogin = function(tipo) {
        datosCliente.tipo = tipo;
        let camposExtra = tipo === 'nuevo' ? `
            <input type="text" id="matricula" placeholder="Matrícula Profesional">
            <input type="text" id="localidad" placeholder="Localidad">
            <input type="text" id="provincia" placeholder="Provincia">
        ` : '';

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarInicio()" style="border:none; background:none;">←</button>
                <div style="text-align:center">
                    <small style="color:var(--azul-biofix); font-weight:bold;
