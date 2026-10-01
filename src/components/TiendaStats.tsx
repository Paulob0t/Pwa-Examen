import React from 'react';
import type { Producto } from '../types/Producto';
import { calcularEstadisticasTienda, formatearPrecio } from '../utils/productoUtils';
import { Package, TrendingUp, Sparkles } from 'lucide-react';

interface TiendaStatsProps {
    productos: Producto[];
}

export const TiendaStats: React.FC<TiendaStatsProps> = ({ productos }) => {
    const { total, precioPromedio, masEconomico } = calcularEstadisticasTienda(productos);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-zinc-900 border border-zinc-800 text-pink-400 rounded-lg">
                    <Package className="w-4 h-4" />
                </div>
                <div>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Productos en Catálogo</p>
                    <p className="text-base font-bold text-zinc-100">{total} Artículos</p>
                </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-zinc-900 border border-zinc-800 text-purple-400 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Precio Promedio</p>
                    <p className="text-base font-bold text-zinc-100">{formatearPrecio(precioPromedio)}</p>
                </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-lg">
                    <Sparkles className="w-4 h-4" />
                </div>
                <div>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Más Económico</p>
                    <p className="text-xs font-bold text-zinc-100 truncate max-w-[180px]">
                        {masEconomico ? `${masEconomico.nombre} (${formatearPrecio(masEconomico.precio)})` : 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    );
};