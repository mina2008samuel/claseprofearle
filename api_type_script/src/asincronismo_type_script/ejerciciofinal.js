"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Paso 1: Obtener usuario usando Callback
function obtenerUsuario(callback) {
    setTimeout(() => {
        const usuario = { id: 92, nombre: "christian" };
        callback(usuario);
    }, 3000);
}
// Paso 2: Obtener películas favoritas usando Promesa
function obtenerPeliculasFavoritas(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof usuarioId !== 'number' || usuarioId < 0 || usuarioId > 100) {
                reject("ID de usuario fuera de rango permitido (0-100)");
            }
            else {
                resolve([1, 2, 3]);
            }
        }, 5000);
    });
}
function obtenerDetallesPelicula(peliculaId) {
    return new Promise((resolve, reject) => {
        const detalles = {
            1: { titulo: "Interestelar", año: 2014 },
            2: { titulo: "Matrix", año: 1999 },
            3: { titulo: "Inception", año: 2010 },
        };
        setTimeout(() => {
            if (detalles[peliculaId]) {
                resolve(detalles[peliculaId]);
            }
            else {
                reject(`Película con ID ${peliculaId} no encontrada`);
            }
        }, 3000);
    });
}
// Paso 4: Función principal usando async/await
function mostrarPerfilUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        obtenerUsuario((usuario) => __awaiter(this, void 0, void 0, function* () {
            console.log(`👤 Usuario: ${usuario.nombre} (ID: ${usuario.id})`);
            try {
                const peliculasIds = yield obtenerPeliculasFavoritas(usuario.id);
                console.log("🎬 Películas favoritas:");
                for (const id of peliculasIds) {
                    const detalle = yield obtenerDetallesPelicula(id);
                    console.log(`- ${detalle.titulo} (${detalle.año})`);
                }
                console.log("✅ Perfil cargado con éxito.");
            }
            catch (error) {
                console.error("❌ Error:", error);
            }
        }));
        console.log("⏳ Cargando perfil...");
    });
}
// Ejecutar
mostrarPerfilUsuario();
