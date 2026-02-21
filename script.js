window.onload = function() {
    // 1. INVENTARIO (Mantenemos toda tu lista original aquí)
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

        // SISTEMA IB
        { codigo: "BFIB3.5 10H", nombre: "3.5x10mm", sistema: "IB" },
        { codigo: "BFIB3.5 12H", nombre: "3.5x12mm", sistema: "IB" },
        { codigo: "BFIB3.5 14H", nombre: "3.5x14mm", sistema: "IB" },
        { codigo: "BFIB3.5 15H", nombre: "3.5x15mm", sistema: "IB" },
        { codigo: "BFIB3.5 18H", nombre: "3.5x18mm", sistema: "IB" },
        { codigo: "BFIB3.5 21H", nombre: "3.5x21mm", sistema: "IB" },
        { codigo: "BFIB3.5 23H", nombre: "3.5x23mm", sistema: "IB" },
        { codigo: "BFIB3.5 26H", nombre: "3.5x26mm", sistema: "IB" },
        { codigo: "BFIB3.5 28H", nombre: "3.5x28mm", sistema: "IB" },
        { codigo: "BFIB3.5 2414H", nombre: "3.5x24 C14", sistema: "IB" },
        { codigo: "BFIB3.5 2616H", nombre: "3.5x26 C16", sistema: "IB" },
        { codigo: "BFIB3.5 2818H", nombre: "3.5x28 C18", sistema: "IB" },
        { codigo: "BFIB4.5 10H", nombre: "4.5x10mm", sistema: "IB" },
        { codigo: "BFIB4.5 12H", nombre: "4.5x12mm", sistema: "IB" },
        { codigo: "BFIB4.5 15H", nombre: "4.5x15mm", sistema: "IB" },
        { codigo: "BFIB4.5 18H", nombre: "4.5x18mm", sistema: "IB" },
        { codigo: "BFIB4.5 21H", nombre: "4.5x21mm", sistema: "IB" },
        { codigo: "BFIB4.5 23H", nombre: "4.5x23mm", sistema: "IB" },
        { codigo: "BFIB4.5 26H", nombre: "4.5x26mm", sistema: "IB" },
        { codigo: "BFIB4.5 28H", nombre: "4.5x28mm", sistema: "IB" },
        { codigo: "BFIB4.5 2414H", nombre: "4.5x24 C14", sistema: "IB" },
        { codigo: "BFIB4.5 2616H", nombre: "4.5x26 C16", sistema: "IB" },
        { codigo: "BFIB4.5 2818H", nombre: "4.5x28 C18", sistema: "IB" },
        { codigo: "BFIB5.5 9H", nombre: "5.5x9mm", sistema: "IB" },
        { codigo: "BFIB5.5 10H", nombre: "5.5x10mm", sistema: "IB" },
        { codigo: "BFIB5.5 12H", nombre: "5.5x12mm", sistema: "IB" },
        { codigo: "BFIB5.5 15H", nombre: "5.5x15mm", sistema: "IB" },
        { codigo: "BFIB5.5 18H", nombre: "5.5x18mm", sistema: "IB" },
        { codigo: "BFIB6.5 9H", nombre: "6.5x9mm", sistema: "IB" },
        { codigo: "BFIB6.5 10H", nombre: "6.5x10mm", sistema: "IB" },
        { codigo: "BFIB6.5 12H", nombre: "6.5x12mm", sistema: "IB" },
        { codigo: "BFIB6.5 15H", nombre: "6.5x15mm", sistema: "IB" },
        { codigo: "BFIB8.5 9H", nombre: "8.5x9mm", sistema: "IB" },
        { codigo: "BFIB8.5 10H", nombre: "8.5x10mm", sistema: "IB" },
        { codigo: "BFIB8.5 12H", nombre: "8.5x12mm", sistema: "IB" },
        { codigo: "BFIB8.5 15H", nombre: "8.5x15mm", sistema: "IB" },

        // SISTEMA IBT
        { codigo: "BFIBT3.5 10H", nombre: "3.5x10mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 12H", nombre: "3.5x12mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 14H", nombre: "3.5x14mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 15H", nombre: "3.5x15mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 18H", nombre: "3.5x18mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 21H", nombre: "3.5x21mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 23H", nombre: "3.5x23mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 26H", nombre: "3.5x26mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 28H", nombre: "3.5x28mm", sistema: "IBT" },
        { codigo: "BFIBT3.5 2414H", nombre: "3.5x24 C14", sistema: "IBT" },
        { codigo: "BFIBT3.5 2616H", nombre: "3.5x26 C16", sistema: "IBT" },
        { codigo: "BFIBT3.5 2818H", nombre: "3.5x28 C18", sistema: "IBT" },
        { codigo: "BFIBT4.5 10H", nombre: "4.5x10mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 12H", nombre: "4.5x12mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 15H", nombre: "4.5x15mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 18H", nombre: "4.5x18mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 21H", nombre: "4.5x21mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 23H", nombre: "4.5x23mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 26H", nombre: "4.5x26mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 28H", nombre: "4.5x28mm", sistema: "IBT" },
        { codigo: "BFIBT4.5 2414H", nombre: "4.5x24 C14", sistema: "IBT" },
        { codigo: "BFIBT4.5 2616H", nombre: "4.5x26 C16", sistema: "IBT" },
        { codigo: "BFIBT4.5 2818H", nombre: "4.5x28 C18", sistema: "IBT" },
        { codigo: "BFIBT5.5 9H", nombre: "5.5x9mm", sistema: "IBT" },
        { codigo: "BFIBT5.5 10H", nombre: "5.5x10mm", sistema: "IBT" },
        { codigo: "BFIBT5.5 12H", nombre: "5.5x12mm", sistema: "IBT" },
        { codigo: "BFIBT5.5 15H", nombre: "5.5x15mm", sistema: "IBT" },
        { codigo: "BFIBT5.5 18H", nombre: "5.5x18mm", sistema: "IBT" },
        { codigo: "BFIBT6.5 9H", nombre: "6.5x9mm", sistema: "IBT" },
        { codigo: "BFIBT6.5 10H", nombre: "6.5x10mm", sistema: "IBT" },
        { codigo: "BFIBT6.5 12H", nombre: "6.5x12mm", sistema: "IBT" },
        { codigo: "BFIBT6.5 15H", nombre: "6.5x15mm", sistema: "IBT" },
        { codigo: "BFIBT8.5 9H", nombre: "8.5x9mm", sistema: "IBT" },
        { codigo: "BFIBT8.5 10H", nombre: "8.5x10mm", sistema: "IBT" },
        { codigo: "BFIBT8.5 12H", nombre: "8.5x12mm", sistema: "IBT" },
        { codigo: "BFIBT8.5 15H", nombre: "8.5x15mm", sistema: "IBT" },

        // SISTEMA CMU
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
        { codigo: "BFCMU3.5IMP 18H", nombre: "Ø3.5x18mm", sistema: "CMU" },
        { codigo: "BFCMU3.5IMP 20H", nombre: "Ø3.5x20mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 6H", nombre: "Ø4.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 8H", nombre: "Ø4.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 10H", nombre: "Ø4.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 11,5H", nombre: "Ø4.0x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 13H", nombre: "Ø4.0x13mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 15H", nombre: "Ø4.0x15mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 18H", nombre: "Ø4.0x18mm", sistema: "CMU" },
        { codigo: "BFCMU4.0IMP 20H", nombre: "Ø4.0x20mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 6H", nombre: "Ø4.5x6mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 8H", nombre: "Ø4.5x8mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 10H", nombre: "Ø4.5x10mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 11,5H", nombre: "Ø4.5x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 13H", nombre: "Ø4.5x13mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 15H", nombre: "Ø4.5x15mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 18H", nombre: "Ø4.5x18mm", sistema: "CMU" },
        { codigo: "BFCMU4.5IMP 20H", nombre: "Ø4.5x20mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 6H", nombre: "Ø5.0x6mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 8H", nombre: "Ø5.0x8mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 10H", nombre: "Ø5.0x10mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 11,5H", nombre: "Ø5.0x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU5.0IMP 13H", nombre: "Ø5.0x13mm", sistema: "CMU" },
        { codigo: "BFCMU5.5IMP 6H", nombre: "Ø5.5x6mm", sistema: "CMU" },
        { codigo: "BFCMU5.5IMP 8H", nombre: "Ø5.5x8mm", sistema: "CMU" },
        { codigo: "BFCMU5.5IMP 10H", nombre: "Ø5.5x10mm", sistema: "CMU" },
        { codigo: "BFCMU5.5IMP 11,5H", nombre: "Ø5.5x11.5mm", sistema: "CMU" },
        { codigo: "BFCMU5.5IMP 13H", nombre: "Ø5.5x13mm", sistema: "CMU" },

        // SISTEMA C3MU
        { codigo: "BFCMU3.0IMP6H C3", nombre: "Ø3.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP8H C3", nombre: "Ø3.0x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP10H C3", nombre: "Ø3.0x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP11,5H C3", nombre: "Ø3.0x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP13H C3", nombre: "Ø3.0x13mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP15H C3", nombre: "Ø3.0x15mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP18H C3", nombre: "Ø3.0x18mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.0IMP20H C3", nombre: "Ø3.0x20mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP6H C3", nombre: "Ø3.5x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP8H C3", nombre: "Ø3.5x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP10H C3", nombre: "Ø3.5x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP11,5H C3", nombre: "Ø3.5x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP13H C3", nombre: "Ø3.5x13mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP15H C3", nombre: "Ø3.5x15mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP18H C3", nombre: "Ø3.5x18mm C3", sistema: "C3MU" },
        { codigo: "BFCMU3.5IMP20H C3", nombre: "Ø3.5x20mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP6H C3", nombre: "Ø4.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP8H C3", nombre: "Ø4.0x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP10H C3", nombre: "Ø4.0x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP11,5H C3", nombre: "Ø4.0x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP13H C3", nombre: "Ø4.0x13mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP15H C3", nombre: "Ø4.0x15mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP18H C3", nombre: "Ø4.0x18mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.0IMP20H C3", nombre: "Ø4.0x20mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP6H C3", nombre: "Ø4.5x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP8H C3", nombre: "Ø4.5x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP10H C3", nombre: "Ø4.5x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP11,5H C3", nombre: "Ø4.5x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP13H C3", nombre: "Ø4.5x13mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP15H C3", nombre: "Ø4.5x15mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP18H C3", nombre: "Ø4.5x18mm C3", sistema: "C3MU" },
        { codigo: "BFCMU4.5IMP20H C3", nombre: "Ø4.5x20mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.0IMP6H C3", nombre: "Ø5.0x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.0IMP8H C3", nombre: "Ø5.0x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.0IMP10H C3", nombre: "Ø5.0x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.0IMP11,5H C3", nombre: "Ø5.0x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.0IMP13H C3", nombre: "Ø5.0x13mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.5IMP6H C3", nombre: "Ø5.5x6mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.5IMP8H C3", nombre: "Ø5.5x8mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.5IMP10H C3", nombre: "Ø5.5x10mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.5IMP11,5H C3", nombre: "Ø5.5x11.5mm C3", sistema: "C3MU" },
        { codigo: "BFCMU5.5IMP13H C3", nombre: "Ø5.5x13mm C3", sistema: "C3MU" },

        // SISTEMA HE
        { codigo: "BFHE3.4IMP85H", nombre: "Ø3.3x8.5mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP10H", nombre: "Ø3.3x10mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP11.5H", nombre: "Ø3.3x11.5mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP13H", nombre: "Ø3.3x13mm", sistema: "HE" },
        { codigo: "BFHE3.4IMP15H", nombre: "Ø3.3x15mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP85H", nombre: "Ø3.75x8mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP10H", nombre: "Ø3.75x10mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP11.5H", nombre: "Ø3.75x11.5mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP13H", nombre: "Ø3.75x13mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP15H", nombre: "Ø3.75x15mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP6H", nombre: "Ø4.0x6mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP8H", nombre: "Ø4.0x8.5mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP10H", nombre: "Ø4.0x10mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP11.5H", nombre: "Ø4.0x11.5mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP13H", nombre: "Ø4.0x13mm", sistema: "HE" },
        { codigo: "BFHE4.1IMP15H", nombre: "Ø4.0x15mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP6H", nombre: "Ø5.0x6mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP8H", nombre: "Ø5.0x8.5mm", sistema: "HE" },
        { codigo: "BFHE5.0IMPH10", nombre: "Ø5.0x10mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP11,5H", nombre: "Ø5.0x11.5mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP13H", nombre: "Ø5.0x13mm", sistema: "HE" },
        { codigo: "BFHE5.0IMP15H", nombre: "Ø5.0x15mm", sistema: "HE" },

        // SISTEMA HI
        { codigo: "BFHI3.3IMP6.5H", nombre: "Ø3.3x6.5mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP10H", nombre: "Ø3.3x10mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP11.5H", nombre: "Ø3.3x11.5mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP13H", nombre: "Ø3.3x13mm", sistema: "HI" },
        { codigo: "BFHI3.3IMP16H", nombre: "Ø3.3x16mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP6.5H", nombre: "Ø3.75x6.5mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP8H", nombre: "Ø3.75x8mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP10H", nombre: "Ø3.75x10mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP11.5H", nombre: "Ø3.75x11.5mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP13H", nombre: "Ø3.75x13mm", sistema: "HI" },
        { codigo: "BFHI3.8IMP16H", nombre: "Ø3.75x16mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP6.5H", nombre: "Ø4.2x6.5mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP8H", nombre: "Ø4.2x8mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP10H", nombre: "Ø4.2x10mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP11.5H", nombre: "Ø4.2x11.5mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP13H", nombre: "Ø4.2x13mm", sistema: "HI" },
        { codigo: "BFHI4.2IMP16H", nombre: "Ø4.2x16mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP6.5H", nombre: "Ø5.0x6.5mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP8H", nombre: "Ø5.0x8mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP10H", nombre: "Ø5.0x10mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP11.5H", nombre: "Ø5.0x11.5mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP13H", nombre: "Ø5.0x13mm", sistema: "HI" },
        { codigo: "BFHI5.0IMP16H", nombre: "Ø5.0x16mm", sistema: "HI" },

        // SISTEMA CMHI
        { codigo: "BFCM3.3IMP8H", nombre: "Ø3.3x8mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP10H", nombre: "Ø3.3x10mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP11.5H", nombre: "Ø3.3x11.5mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP13H", nombre: "Ø3.3x13mm", sistema: "CMHI" },
        { codigo: "BFCM3.3IMP16H", nombre: "Ø3.3x16mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP8H", nombre: "Ø3.75x8mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP10H", nombre: "Ø3.75x10mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP11.5H", nombre: "Ø3.75x11.5mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP13H", nombre: "Ø3.75x13mm", sistema: "CMHI" },
        { codigo: "BFCM3.75IMP16H", nombre: "Ø3.75x16mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP8H", nombre: "Ø4.2x8mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP10H", nombre: "Ø4.2x10mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP11.5H", nombre: "Ø4.2x11.5mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP13H", nombre: "Ø4.2x13mm", sistema: "CMHI" },
        { codigo: "BFCM4.2IMP16H", nombre: "Ø4.2x16mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP8H", nombre: "Ø5.0x8mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP10H", nombre: "Ø5.0x10mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP11.5H", nombre: "Ø5.0x11.5mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP13H", nombre: "Ø5.0x13mm", sistema: "CMHI" },
        { codigo: "BFCM5.0IMP16H", nombre: "Ø5.0x16mm", sistema: "CMHI" }
    ];

    let datosCliente = { tipo: "", nombre: "", dni: "", matricula: "", localidad: "", provincia: "" };
    let carrito = {};
    const app = document.getElementById('app');

    const coloresSistemas = {
        "MP": "color-mp", "CMU": "color-cmu", "HE": "color-he", 
        "HI": "color-hi", "BASAL": "color-basal", "CMHI": "color-cmhi"
    };

    // 2. FUNCIONES DE NAVEGACIÓN
    window.mostrarInicio = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1><p>Professional Implant Systems</p></div>
            <div class="nav-container" style="justify-content: center;">
                <div style="font-weight:800; text-transform:uppercase;">Seleccione Ingreso</div>
            </div>
            <div style="padding: 20px;">
                <button class="btn-opcion" style="width:100%; margin-bottom:15px;" onclick="formularioLogin('registrado')">👨‍⚕️ Cliente Registrado</button>
                <button class="btn-opcion" style="width:100%;" onclick="formularioLogin('nuevo')">✨ Registro Nuevo</button>
            </div>
        `;
    };

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
                    <small style="color:var(--azul-biofix); font-weight:bold; font-size:10px;">BIENVENIDO</small>
                    <div style="font-weight:800;">${tipo === 'nuevo' ? 'NUEVO REGISTRO' : 'INGRESO'}</div>
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
        if (datosCliente.tipo === 'nuevo') {
            datosCliente.matricula = document.getElementById('matricula').value;
            datosCliente.localidad = document.getElementById('localidad').value;
            datosCliente.provincia = document.getElementById('provincia').value;
        }

        if (datosCliente.nombre && datosCliente.dni) {
            mostrarCategorias();
        } else { alert("Por favor, completa Nombre y DNI"); }
    };

    window.mostrarCategorias = function() {
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <div></div>
                <div style="text-align:center">
                    <small style="color:var(--azul-biofix); font-weight:bold; font-size:10px;">HOLA DR.</small>
                    <div style="font-weight:800; text-transform:uppercase;">${datosCliente.nombre}</div>
                </div>
                <button onclick="mostrarInicio()" style="border:none; background:none; font-size:20px;">×</button>
            </div>
            <div style="padding: 20px; display: grid; gap: 15px;">
                <button class="btn-opcion" onclick="mostrarSistemas()">📦 Implantes</button>
                <button class="btn-opcion" onclick="alert('Próximamente')">🛠️ Componentes Analógicos</button>
                <button class="btn-opcion" style="background:#8e44ad; color:white;" onclick="alert('Próximamente')">💻 Flujo Digital</button>
            </div>
        `;
    };

    window.mostrarSistemas = function() {
        const sistemas = [...new Set(inventario.map(p => p.sistema))];
        let htmlSistemas = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 20px;">`;
        
        sistemas.forEach(sis => {
            const claseColor = coloresSistemas[sis] || "";
            htmlSistemas += `
                <button class="btn-opcion" onclick="filtrar('${sis}')" style="height: 80px;">
                    <span class="sistema-label ${claseColor}">SISTEMA</span><br>
                    <span>${sis}</span>
                </button>
            `;
        });

        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarCategorias()" style="border:none; background:none;">←</button>
                <div style="text-align:center">
                    <small style="color:var(--azul-biofix); font-weight:bold; font-size:10px;">CATÁLOGO</small>
                    <div style="font-weight:800;">IMPLANTES</div>
                </div>
                <div class="badge-pedido">${Object.values(carrito).reduce((a,b)=>a+b,0)}</div>
            </div>
            ${htmlSistemas}</div>
        `;
    };

    window.filtrar = function(sis) {
        const prods = inventario.filter(p => p.sistema === sis);
        const claseColor = coloresSistemas[sis] || "";
        app.innerHTML = `
            <div class="header-biofix"><h1>BIO-FIX®</h1></div>
            <div class="nav-container">
                <button onclick="mostrarSistemas()" style="border:none; background:none;">←</button>
                <div style="text-align:center">
                    <span class="sistema-label ${claseColor}">SISTEMA</span> <span>${sis}</span>
                </div>
                <div class="badge-pedido">ITEMS: ${Object.values(carrito).reduce((a,b)=>a+b,0)}</div>
            </div>
            <div class="card-login" style="max-height:400px; overflow-y:auto; margin-top:0;">
                ${prods.map(p => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                        <div><strong class="${claseColor}">${p.codigo}</strong><br><small>${p.nombre}</small></div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button onclick="cambiarCantidad('${p.codigo}', -1)" style="width:25px; border-radius:50%; border:1px solid #ddd;">-</button>
                            <span id="cant-${p.codigo}">${carrito[p.codigo] || 0}</span>
                            <button onclick="cambiarCantidad('${p.codigo}', 1)" style="width:25px; border-radius:50%; border:1px solid #ddd;">+</button>
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

    mostrarInicio();
};
