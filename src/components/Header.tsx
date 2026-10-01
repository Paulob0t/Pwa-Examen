import React from 'react';
import { ShoppingBag, Search, Bookmark } from 'lucide-react';

interface HeaderProps {
    busqueda: string;
    onCambiarBusqueda: (texto: string) => void;
    totalMostrados: number;
    totalFavoritos: number;
    mostrarSoloFavoritos: boolean;
    onToggleMostrarFavoritos: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    busqueda,
    onCambiarBusqueda,
    totalMostrados,
    totalFavoritos,
    mostrarSoloFavoritos,
    onToggleMostrarFavoritos,
}) => {
    return (
        <header className="bg-zinc-950/90 border-b border-zinc-900 sticky top-0 z-40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-pink-400">
                        <ShoppingBag className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-wider uppercase text-zinc-100">
                            Abarrotes <span className="text-pink-400 font-medium">PEAQ</span>
                        </h1>
                        <p className="text-[11px] text-zinc-400 tracking-tight">
                            Paulo Essau Armenta Quezada • {totalMostrados} productos disponibles
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            value={busqueda}
                            onChange={(e) => onCambiarBusqueda(e.target.value)}
                            placeholder="Buscar producto o categoría..."
                            className="w-full pl-9 pr-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    <button
                        onClick={onToggleMostrarFavoritos}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${mostrarSoloFavoritos
                            ? 'bg-pink-500 text-zinc-950 border-pink-500 font-semibold'
                            : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                            }`}
                    >
                        <Bookmark className={`w-3.5 h-3.5 ${mostrarSoloFavoritos ? 'fill-current' : ''}`} />
                        <span>Guardados ({totalFavoritos})</span>
                    </button>
                </div>
            </div>
        </header>
    );
};