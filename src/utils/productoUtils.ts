import type { Producto } from '../types/Producto';

// Parte funcional de la tineda

//Filtrar porcategorias
export function filtrarPorCategoria(productos: Producto[], categoria: string): Producto[] {
    if (!categoria || categoria === 'Todos') return productos;
    return productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase());
}


///Funcionn para poder buscar productos
export function buscarProductos(productos: Producto[], termino: string): Producto[] {
    const query = termino.trim().toLowerCase();
    if (!query) return productos;

    return productos.filter(({ nombre, descripcion, categoria }) =>
        nombre.toLowerCase().includes(query) ||
        descripcion.toLowerCase().includes(query) ||
        categoria.toLowerCase().includes(query)
    );
}

//funcion para darle formato a la moneda 
export function formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    }).format(precio);
}


//funcion para calcular la estadistica de la tienda 
export function calcularEstadisticasTienda(productos: Producto[]) {
    const total = productos.length;
    if (total === 0) return { total: 0, precioPromedio: 0, masEconomico: null };

    const sumaPrecios = productos.reduce((acc, p) => acc + p.precio, 0);
    const promedio = Number((sumaPrecios / total).toFixed(2));
    const masEconomico = [...productos].sort((a, b) => a.precio - b.precio)[0];

    return { total, precioPromedio: promedio, masEconomico };
}

