window.onload = function() {
    // 1. BASE DE DATOS
    const inventario = [
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
        { codigo: "BFCMU3.0 IMP 6H", nombre: "Ø3.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 8H", nombre: "Ø3.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU3.0 IMP 10H", nombre: "Ø3.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU3.5 IMP 10H", nombre: "Ø3.5x10mm", sistema: "CMU" },
        { codigo: "BFCMU3.0IMP6H C3", nombre: "Ø3.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP8H C3", nombre: "Ø3.5x8mm C3", sistema: "C3MU" },
        { codigo: "BFHE3.4IMP85H", nombre: "Ø3.3x8.5mm", sistema: "HE" },
        { codigo: "BFHI3.3IMP6.5H", nombre: "Ø3.3x6.5mm", sistema: "HI" },
        { codigo: "BFCM3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "CMHI" }
    ];

    let datosCliente = { nombre: "", dni: "" };
    let carrito = {};
    const app = document.getElementById('app');

    const coloresSistemas = {
        "MP": "color-mp", "CMU": "color-cmu", "C3MU": "color-cmu", 
        "HE": "color-he", "HI": "color-hi", "CMHI": "color-cmhi"
    };

    // --- PANTALLA 1: INICIO ---
    window.mostrarInicio = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1><p>Professional Implant Systems</p></div>
            <div class="nav-container" style="justify-content: center;"><b>BIENVENIDO</b></div>
            <div style="padding: 20px; display: grid; gap: 15px;">
                <button class="btn-opcion" onclick="formularioLogin('registrado')">👨‍⚕️ Cliente Registrado</button>
                <button class="btn-opcion" onclick="formularioLogin('nuevo')">✨ Registro Nuevo Profesional</button>
            </div>`;
    };

    // --- PANTALLA 2: FORMULARIO ---
    window.formularioLogin = function(tipo) {
        let camposExtra = (tipo === 'nuevo') ? `
            <input type="text" id="mat" placeholder="Matrícula Profesional">
            <input type="text" id="loc" placeholder="Localidad">
            <input type="text" id="pro" placeholder="Provincia">` : '';

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarInicio()">←</button>
                <div style="text-align:center"><b>DATOS DE ACCESO</b></div>
                <div></div>
            </div>
            <div class="card-login">
                <input type="text" id="nom" placeholder="Nombre y Apellido">
                <input type="number" id="dni_val" placeholder="DNI">
                ${camposExtra}
            </div>
            <button class="btn-principal" onclick="validarYEntrar()">INGRESAR</button>`;
    };

    // --- LÓGICA DE VALIDACIÓN ---
    window.validarYEntrar = function() {
        const n = document.getElementById('nom').value;
        const d = document.getElementById('dni_val').value;
        if (n && d) {
            datosCliente.nombre = n;
            datosCliente.dni = d;
            mostrarCategorias();
        } else {
            alert("Complete Nombre y DNI");
        }
    };

    // --- PANTALLA 3: CATEGORÍAS ---
    window.mostrarCategorias = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <div></div>
                <div style="text-align:center"><small>DR/A.</small><br><b>${datosCliente.nombre.toUpperCase()}</b></div>
                <button onclick="mostrarInicio()">×</button>
            </div>
            <div style="padding: 20px;">
                <button class="btn-opcion" style="width:100%;" onclick="mostrarSistemas()">📦 IMPLANTES</button>
            </div>`;
    };

    // --- PANTALLA 4: SISTEMAS ---
    window.mostrarSistemas = function() {
        const sistemas = ["MP", "CMU", "HE", "HI", "CMHI"];
        let botones = sistemas.map(s => `
            <button class="btn-opcion" onclick="filtrarSist('${s}')" style="height:80px;">
                <b class="${coloresSistemas[s]}">SISTEMA</b><br>${s}
            </button>`).join('');

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarCategorias()">←</button>
                <div style="text-align:center"><b>SELECCIONE SISTEMA</b></div>
                <div class="badge-pedido">${sumarCarrito()}</div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:20px;">${botones}</div>`;
    };

    // --- PANTALLA 5: FILTRADO (DIÁMETROS) ---
    window.filtrarSist = function(s) {
        if (s === 'CMU') {
            app.innerHTML = `
                <div class="header-biofix"><h1>BIO-FIX®</h1></div>
                <div class="nav-container"><button onclick="mostrarSistemas()">←</button><b>OPCIONES CMU</b><div></div></div>
                <div style="padding:20px; display:grid; gap:15px;">
                    <button class="btn-opcion" onclick="mostrarDiametros('CMU')">Standard CMU</button>
                    <button class="btn-opcion" onclick="mostrarDiametros('C3MU')">CMU C3</button>
                </div>`;
        } else {
            mostrarDiametros(s);
        }
    };

    window.mostrarDiametros = function(sFinal) {
        const prods = inventario.filter(p => p.sistema === sFinal);
        const dias = [...new Set(prods.map(p => p.nombre.split('x')[0]))];
        const color = coloresSistemas[sFinal] || "color-mp";

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarSistemas()">←</button>
                <div style="text-align:center"><b>DIÁMETROS</b><br><small>${sFinal}</small></div>
                <div class="badge-pedido">${sumarCarrito()}</div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:20px;">
                ${dias.map(d => `<button class="btn-opcion" onclick="listaFinal('${sFinal}','${d}')"><b class="${color}">${d}</b></button>`).join('')}
            </div>`;
    };

    // --- PANTALLA 6: LISTA FINAL ---
    window.listaFinal = function(s, d) {
        const filtrados = inventario.filter(p => p.sistema === s && p.nombre.startsWith(d));
        const color = coloresSistemas[s];
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarDiametros('${s}')">←</button>
                <div style="text-align:center"><b>${d}</b></div>
                <div class="badge-pedido">${sumarCarrito()}</div>
            </div>
            <div class="card-login" style="max-height:350px; overflow-y:auto; margin-top:0;">
                ${filtrados.map(p => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                        <div><b class="${color}">${p.codigo}</b><br><small>${p.nombre}</small></div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button class="btn-cantidad" onclick="cambiarCant('${p.codigo}',-1)">-</button>
                            <span id="c-${p.codigo}">${carrito[p.codigo] || 0}</span>
                            <button class="btn-cantidad" onclick="cambiarCant('${p.codigo}',1)">+</button>
                        </div>
                    </div>`).join('')}
            </div>
            <button class="btn-principal" onclick="mostrarSistemas()">CONFIRMAR</button>`;
    };

    window.cambiarCant = function(id, v) {
        carrito[id] = (carrito[id] || 0) + v;
        if (carrito[id] < 0) carrito[id] = 0;
        document.getElementById(`c-${id}`).innerText = carrito[id];
    };

    function sumarCarrito() {
        return Object.values(carrito).reduce((a, b) => a + b, 0);
    }

    // ARRANQUE
    mostrarInicio();
};
