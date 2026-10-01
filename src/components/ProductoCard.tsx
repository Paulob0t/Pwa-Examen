import React from 'react';
import type { Producto } from '../types/Producto';
import { formatearPrecio } from '../utils/productoUtils';
import { Bookmark, ArrowUpRight, Package } from 'lucide-react';

interface ProductoCardProps {
    producto: Producto;
    esFavorito: boolean;
    onToggleFavorito: (id: number) => void;
    onVerDetalles: (producto: Producto) => void;
}

export const ProductoCard: React.FC<ProductoCardProps> = ({
    producto,
    esFavorito,
    onToggleFavorito,
    onVerDetalles,
}) => {
    const { id, nombre, categoria, precio, stock, unidad, imagen, disponible } = producto;

    return (
        <div className="group bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between">
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover group-hover:scale-102 transition-all duration-300 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-zinc-950/80 border border-zinc-800 text-purple-400 rounded">
                        {categoria}
                    </span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${disponible
                        ? 'bg-pink-950/80 text-pink-400 border-pink-800/60'
                        : 'bg-rose-950/80 text-rose-400 border-rose-800/60'
                        }`}>
                        {disponible ? 'En Stock' : 'Agotado'}
                    </span>
                </div>

                <button
                    onClick={() => onToggleFavorito(id)}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-lg border transition-colors cursor-pointer ${esFavorito
                        ? 'bg-purple-500 text-zinc-950 border-pink-500'
                        : 'bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:text-zinc-100 hover:border-zinc-700'
                        }`}
                >
                    <Bookmark className={`w-3.5 h-3.5 ${esFavorito ? 'fill-current' : ''}`} />
                </button>

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-xs font-bold text-pink-400 bg-zinc-950/90 px-2 py-0.5 rounded border border-zinc-800">
                    <span>{formatearPrecio(precio)}</span>
                </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                        <Package className="w-3 h-3" />
                        <span>{unidad}</span>
                        <span>•</span>
                        <span>Stock: {stock} pzs</span>
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-pink-400 transition-colors mt-0.5 line-clamp-1">
                        {nombre}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                        {producto.descripcion}
                    </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500 font-mono">#{String(id).padStart(2, '0')}</span>
                    <button
                        onClick={() => onVerDetalles(producto)}
                        className="flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <span>Ver detalle</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    );
};