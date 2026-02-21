window.onload = function() {
    // 1. BASE DE DATOS (Mantenemos tus códigos y medidas exactas)
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

        // SISTEMA CMU (Fucsia)
        { codigo: "BFCMU3.0 IMP 6H", nombre: "Ø3.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 8H", nombre: "Ø3.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 10H", nombre: "Ø3.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 11,5H", nombre: "Ø3.0x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 13H", nombre: "Ø3.0x13mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 15H", nombre: "Ø3.0x15mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 18H", nombre: "Ø3.0x18mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 20H", nombre: "Ø3.0x20mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 6H", nombre: "Ø3.5x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 8H", nombre: "Ø3.5x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 10H", nombre: "Ø3.5x10mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 11,5H", nombre: "Ø3.5x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 13H", nombre: "Ø3.5x13mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 15H", nombre: "Ø3.5x15mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 6H", nombre: "Ø4.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 8H", nombre: "Ø4.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 10H", nombre: "Ø4.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 6H", nombre: "Ø4.5x6mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 6H", nombre: "Ø5.0x6mm", sistema: "CMU" },

        // SISTEMA C3MU (Sub-opción de CMU)
        { codigo: "BFCMU3.0IMP6H C3", nombre: "Ø3.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP8H C3", nombre: "Ø3.0x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP10H C3", nombre: "Ø3.0x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP6H C3", nombre: "Ø3.5x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP8H C3", nombre: "Ø3.5x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP6H C3", nombre: "Ø4.0x6mm C3", sistema: "C3MU" },

        // SISTEMA HE (Verde)
        { codigo: "BFHE3.4IMP85H", nombre: "Ø3.3x8.5mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP10H", nombre: "Ø3.3x10mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP11.5H", nombre: "Ø3.3x11.5mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP13H", nombre: "Ø3.3x13mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP15H", nombre: "Ø3.3x15mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP6H", nombre: "Ø4.0x6mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP8H", nombre: "Ø4.0x8.5mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP10H", nombre: "Ø4.0x10mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP6H", nombre: "Ø5.0x6mm", sistema: "HE" },

        // SISTEMA HI (Rojo)
        { codigo: "BFHI3.3IMP6.5H", nombre: "Ø3.3x6.5mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP10H", nombre: "Ø3.3x10mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP8H", nombre: "Ø3.75x8mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP8H", nombre: "Ø4.2x8mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP8H", nombre: "Ø5.0x8mm", sistema: "HI" },

        // SISTEMA CMHI (Violeta - Cono Morse HI)
        { codigo: "BFCM3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP10H", nombre: "Ø3.3x10mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP11.5H", nombre: "Ø3.3x11.5mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP8H", nombre: "Ø3.75x8mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP8H", nombre: "Ø4.2x8mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP8H", nombre: "Ø5.0x8mm", sistema: "CMHI" }
    ];

    let datosCliente = { tipo: "", nombre: "", dni: "", matricula: "", localidad: "", provincia: "" };
    let carrito = {};
    const app = document.getElementById('app');

    const coloresSistemas = {
        "MP": "color-mp", "CMU": "color-cmu", "C3MU": "color-cmu", 
        "HE": "color-he", "HI": "color-hi", "BASAL": "color-basal", "CMHI": "color-cmhi"
    };

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

    // --- FORMULARIO DE INGRESO ---
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
                    <small style="color:var(--azul-biofix); font-weight:bold; font-size:10px;">BIO-FIX PORTAL</small>
                    <div style="font-weight:800;">${tipo === 'nuevo' ? 'REGISTRO' : 'INGRESO'}</div>
                </div>
                <div class="badge-pedido">PEDIDO (0)</div>
            </div>
            <div class="card-login">
                <input type="text" id="nombre" placeholder="Nombre y Apellido">
                <input type="number" id="dni" placeholder="DNI">
                ${camposExtra}
            </div>
            <button class="btn-principal" onclick="ingresarAlSistema()">INGRESAR</button>
        `;
    };

    window.ingresarAlSistema = function() {
        datosCliente.nombre = document.getElementById('nombre').value;
        datosCliente.dni = document.getElementById('dni').value;
        if (tipo === 'nuevo') {
            datosCliente.matricula = document.getElementById('matricula').value;
            datosCliente.localidad = document.getElementById('localidad').value;
            datosCliente.provincia = document.getElementById('provincia').value;
        }
        if (datosCliente.nombre && datosCliente.dni) { mostrarCategorias(); } 
        else { alert("Completa los datos obligatorios"); }
    };

    // --- SELECCIÓN DE CATEGORÍA ---
    window.mostrarCategorias = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <div></div>
                <div style="text-align:center">
                    <small style="color:var(--azul-biofix); font-weight:bold; font-size:10px;">HOLA DR.</small>
                    <div style="font-weight:800; text-transform:uppercase;">${datosCliente.nombre}</div>
                </div>
                <button onclick="mostrarInicio()" style="border:none; background:none;">×</button>
            </div>
            <div style="padding: 20px; display: grid; gap: 15px;">
                <button class="btn-opcion" onclick="mostrarSistemas()">📦 Implantes</button>
                <button class="btn-opcion">🛠️ Componentes</button>
            </div>
        `;
    };

    // --- SELECCIÓN DE SISTEMA (CON COLORES) ---
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
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarCategorias()" style="border:none; background:none;">←</button>
                <div style="text-align:center"><div style="font-weight:800;">SISTEMAS</div></div>
                <div class="badge-pedido">${obtenerTotalItems()}</div>
            </div>
            ${htmlBotones}</div>
        `;
    };

    // --- FILTRADO POR DIAMETRO / SUB-SISTEMA ---
    window.filtrar = function(sis) {
        if (sis === "CMU") {
            app.innerHTML = `
                <div class="header-biofix"><h1>BIO-FIX®</h1></div>
                <div class="nav-container">
                    <button onclick="mostrarSistemas()" style="border:none; background:none;">←</button>
                    <div style="text-align:center"><div style="font-weight:800;">OPCIONES CMU</div></div>
                    <div class="badge-pedido">${obtenerTotalItems()}</div>
                </div>
                <div style="padding: 20px; display: grid; gap: 15px;">
                    <button class="btn-opcion" onclick="mostrarDiametros('CMU')">Standard CMU</button>
                    <button class="btn-opcion" onclick="mostrarDiametros('C3MU')">CMU C3</button>
                </div>`;
        } else {
            mostrarDiametros(sis);
        }
    };

    window.mostrarDiametros = function(sisFinal) {
        const prods = inventario.filter(p => p.sistema === sisFinal);
        const diametros = [...new Set(prods.map(p => p.nombre.split('x')[0]))];
        const claseColor = coloresSistemas[sisFinal] || "";

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarSistemas()" style="border:none; background:none;">←</button>
                <div style="text-align:center"><div style="font-weight:800;">DIÁMETROS</div><small>${sisFinal}</small></div>
                <div class="badge-pedido">${obtenerTotalItems()}</div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 20px;">
                ${diametros.map(d => `<button class="btn-opcion" onclick="mostrarProductosFinales('${sisFinal}', '${d}')"><span class="${claseColor}" style="font-weight:bold;">${d}</span></button>`).join('')}
            </div>
        `;
    };

    window.mostrarProductosFinales = function(sis, dia) {
        const prods = inventario.filter(p => p.sistema === sis && p.nombre.startsWith(dia));
        const claseColor = coloresSistemas[sis] || "";

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarDiametros('${sis}')" style="border:none; background:none;">←</button>
                <div style="text-align:center"><div style="font-weight:800;">${dia}</div><small>${sis}</small></div>
                <div class="badge-pedido">${obtenerTotalItems()}</div>
            </div>
            <div class="card-login" style="max-height:400px; overflow-y:auto; margin-top:0;">
                ${prods.map(p => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                        <div><strong class="${claseColor}">${p.codigo}</strong><br><small>${p.nombre}</small></div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button class="btn-cantidad" onclick="cambiarCantidad('${p.codigo}', -1)">-</button>
                            <span id="cant-${p.codigo}">${carrito[p.codigo] || 0}</span>
                            <button class="btn-cantidad" onclick="cambiarCantidad('${p.codigo}', 1)">+</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn-principal" onclick="mostrarSistemas()">Confirmar</button>
        `;
    };

    window.cambiarCantidad = function(cod, val) {
        carrito[cod] = (carrito[cod] || 0) + val;
        if (carrito[cod] < 0) carrito[cod] = 0;
        document.getElementById(`cant-${cod}`).innerText = carrito[cod];
    };

    function obtenerTotalItems() {
        return Object.values(carrito).reduce((a, b) => a + b, 0);
    }

    mostrarInicio();
};
