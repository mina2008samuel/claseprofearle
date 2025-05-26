// Paso 1: Obtener usuario usando Callback
function obtenerUsuario(callback: (usuario: { id: number; nombre: string }) => void): void {
  setTimeout(() => {
    const usuario = { id: 92, nombre: "christian" };
    callback(usuario);
  }, 3000);
}

// Paso 2: Obtener películas favoritas usando Promesa
function obtenerPeliculasFavoritas(usuarioId: number): Promise<number[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof usuarioId !== 'number' || usuarioId < 0 || usuarioId > 100) {
        reject("ID de usuario fuera de rango permitido (0-100)");
      } else {
        resolve([1, 2, 3]);
      }
    }, 5000);
  });
}

// Paso 3: Obtener detalles de películas usando Promesa
interface DetallePelicula {
  titulo: string;
  año: number;
}

function obtenerDetallesPelicula(peliculaId: number): Promise<DetallePelicula> {
  return new Promise((resolve, reject) => {
    const detalles: Record<number, DetallePelicula> = {
      1: { titulo: "Interestelar", año: 2014 },
      2: { titulo: "Matrix", año: 1999 },
      3: { titulo: "Inception", año: 2010 },
    };

    setTimeout(() => {
      if (detalles[peliculaId]) {
        resolve(detalles[peliculaId]);
      } else {
        reject(`Película con ID ${peliculaId} no encontrada`);
      }
    }, 3000);
  });
}

// Paso 4: Función principal usando async/await
async function mostrarPerfilUsuario(): Promise<void> {
  obtenerUsuario(async (usuario) => {
    console.log(`👤 Usuario: ${usuario.nombre} (ID: ${usuario.id})`);

    try {
      const peliculasIds = await obtenerPeliculasFavoritas(usuario.id);
      console.log("🎬 Películas favoritas:");

      for (const id of peliculasIds) {
        const detalle = await obtenerDetallesPelicula(id);
        console.log(`- ${detalle.titulo} (${detalle.año})`);
      }

      console.log("✅ Perfil cargado con éxito.");
    } catch (error) {
      console.error("❌ Error:", error);
    }
  });

  console.log("⏳ Cargando perfil...");
}

// Ejecutar
mostrarPerfilUsuario();
