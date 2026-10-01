import { useState, useMemo } from 'react';
import type { Producto } from './types/Producto';
import { PRODUCTOS_ABARROTES } from './data/productos';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductoCard } from './components/ProductoCard';
import { TiendaStats } from './components/TiendaStats';
import { ProductoDetailModal } from './components/ProductoDetailModal';
// import { LoadingTimer } from './components/LoadingTimer';
import { filtrarPorCategoria, buscarProductos } from './utils/productoUtils';
import { Package } from 'lucide-react';

function App() {
  const [productos] = useState<Producto[]>(PRODUCTOS_ABARROTES);
  // const [cargando, setCargando] = useState<boolean>(true);
  // const [segundosRestantes, setSegundosRestantes] = useState<number>(3.0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState<boolean>(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  /*
  // Temporizador de 3 segundos y carga asíncrona (Comentado)
  useEffect(() => {
    const cargarCatalogoAsincrono = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProductos(PRODUCTOS_ABARROTES);
    };

    cargarCatalogoAsincrono();

    const inicio = Date.now();
    const tiempoObjetivo = 3000;

    const intervalo = window.setInterval(() => {
      const transcurrido = Date.now() - inicio;
      const restante = Math.max(0, (tiempoObjetivo - transcurrido) / 1000);
      setSegundosRestantes(restante);

      if (transcurrido >= tiempoObjetivo) {
        clearInterval(intervalo);
        setCargando(false);
      }
    }, 50);

    return () => clearInterval(intervalo);
  }, []);
  */

  const categorias = useMemo(() => {
    return ['Todos', ...Array.from(new Set(productos.map((p) => p.categoria)))];
  }, [productos]);

  const listaFiltrada = useMemo(() => {
    let resultado = filtrarPorCategoria(productos, categoriaSeleccionada);
    resultado = buscarProductos(resultado, busqueda);

    if (mostrarSoloFavoritos) {
      resultado = resultado.filter((p) => favoritos.includes(p.id));
    }

    return resultado;
  }, [productos, categoriaSeleccionada, busqueda, mostrarSoloFavoritos, favoritos]);

  const handleToggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-purple-500 selection:text-zinc-950">
      {/* 1. Header con buscador y favoritos */}
      <Header
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
        totalMostrados={listaFiltrada.length}
        totalFavoritos={favoritos.length}
        mostrarSoloFavoritos={mostrarSoloFavoritos}
        onToggleMostrarFavoritos={() => setMostrarSoloFavoritos((prev) => !prev)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border border-zinc-800/90 bg-zinc-900/40 rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-pink-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              AWP Habilitada • Catálogo de Abarrotes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-100 mt-2">
              Abarrotes PEAQ • Tienda Online
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Catálogo de {productos.length} productos básicos con precios actualizados
            </p>
          </div>
        </div>

        {/* {cargando ? (
          <LoadingTimer segundosRestantes={segundosRestantes} />
        ) : ( */}
          <>
            <TiendaStats productos={productos} />

            <CategoryFilter
              categorias={categorias}
              categoriaActiva={categoriaSeleccionada}
              onSeleccionarCategoria={setCategoriaSeleccionada}
            />

            {listaFiltrada.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {listaFiltrada.map((producto) => (
                  <ProductoCard
                    key={producto.id}
                    producto={producto}
                    esFavorito={favoritos.includes(producto.id)}
                    onToggleFavorito={handleToggleFavorito}
                    onVerDetalles={setProductoSeleccionado}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-xl">
                <Package className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-zinc-400">No se encontraron productos</p>
                <p className="text-xs text-zinc-600 mt-1">Intenta restablecer los filtros de búsqueda o departamento.</p>
              </div>
            )}
          </>
        {/* )} */}

      </main>

      <ProductoDetailModal
        producto={productoSeleccionado}
        onCerrar={() => setProductoSeleccionado(null)}
      />

      <footer className="bg-zinc-950 border-t border-zinc-900 py-6 text-center text-[11px] text-zinc-600">
        <p>PEAQ Tienda AWP • Paulo Essau Armenta Quezada • Aplicación Web Progresiva</p>
      </footer>
    </div>
  );
}

export default App;
