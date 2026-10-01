import React from 'react';
import type { Producto } from '../types/Producto';
import { formatearPrecio } from '../utils/productoUtils';
import { X, Tag, CheckCircle } from 'lucide-react';

interface ProductoDetailModalProps {
  producto: Producto | null;
  onCerrar: () => void;
}

export const ProductoDetailModal: React.FC<ProductoDetailModalProps> = ({ producto, onCerrar }) => {
  if (!producto) return null;

  return (
    <div
      onClick={onCerrar}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
      >
        <button
          onClick={onCerrar}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="md:w-1/2 bg-zinc-950 flex items-center justify-center min-h-[220px]">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover max-h-[350px]"
          />
        </div>

        <div className="p-5 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-purple-950 border border-purple-800 text-purple-400 rounded flex items-center gap-1">
                <Tag className="w-2.5 h-2.5" />
                {producto.categoria}
              </span>
              <span className="text-xs text-zinc-500">
                {producto.unidad}
              </span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100 leading-tight">
              {producto.nombre}
            </h3>

            <div className="mt-3 flex items-center justify-between p-3 bg-zinc-950/60 rounded-xl border border-zinc-800">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Precio Unitario</span>
                <span className="text-xl font-extrabold text-pink-400">{formatearPrecio(producto.precio)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Inventario</span>
                <span className="text-xs font-semibold text-zinc-200">{producto.stock} disponibles</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
              {producto.descripcion}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-1 text-pink-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Garantía de frescura</span>
            </span>
            <span className="font-mono">ID #{producto.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
