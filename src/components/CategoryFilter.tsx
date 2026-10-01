import React from 'react'

interface CategoryFilterProps {
    categorias: string[];
    categoriaActiva: string;
    onSeleccionarCategoria: (categoria: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categorias,
    categoriaActiva,
    onSeleccionarCategoria,
}) => {
    return (
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 my-4 no-scrollbar">
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider mr-2 shrink-0">
                Departamento:
            </span>
            {categorias.map((categoria) => {
                const activo = categoriaActiva === categoria;
                return (
                    <button
                        key={categoria}
                        onClick={() => onSeleccionarCategoria(categoria)}
                        className={`px-3 py-1 rounded-md text-xs font-medium tracking-tight whitespace-nowrap transition-colors cursor-pointer border ${activo
                            ? 'bg-pink-500 text-zinc-950 border-pink-500 font-semibold'
                            : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                            }`}
                    >
                        {categoria}
                    </button>
                );
            })}
        </div>
    );
};