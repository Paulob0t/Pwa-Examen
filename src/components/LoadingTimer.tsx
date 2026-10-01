import React from 'react';
import { ShoppingBag, Loader2 } from 'lucide-react';

interface LoadingTimerProps {
  segundosRestantes: number;
}

export const LoadingTimer: React.FC<LoadingTimerProps> = ({ segundosRestantes }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative mb-4">
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-emerald-400">
          <ShoppingBag className="w-8 h-8 animate-pulse" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-zinc-950 rounded-full p-1">
          <Loader2 className="w-3 h-3 animate-spin" />
        </div>
      </div>

      <h3 className="text-base font-bold text-zinc-100">
        Cargando Catálogo de Abarrotes...
      </h3>
      <p className="text-xs text-zinc-500 mt-1 max-w-sm">
        Sincronizando inventario de la tienda. El catálogo se mostrará al completar el conteo en retroceso de 3 segundos.
      </p>

      {/* Contador visible en retroceso */}
      <div className="mt-5 flex flex-col items-center gap-1.5">
        <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">Conteo en retroceso</span>
        <div className="px-4 py-1.5 bg-zinc-900 border border-emerald-500/40 rounded-full text-sm font-mono text-emerald-400 font-bold shadow-lg shadow-emerald-500/10">
          ⏱️ {segundosRestantes.toFixed(1)}s
        </div>
      </div>
    </div>
  );
};
