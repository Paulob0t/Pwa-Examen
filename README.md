# PEAQ Biblio AWP • Galería Fotográfica Biblioteca Central UTL

**Estudiante:** Paulo Essau Armenta Quezada (PEAQ)  
**Proyecto:** `peaq-biblio-awp`  
**Universidad:** Universidad Tecnológica de León (UTL)  
**Stack:** Vite + React 19 + TypeScript + Tailwind CSS + PWA Builder (Workbox)

---

## 🏛️ Arquitectura del Proyecto (100% Modular)

El proyecto está diseñado siguiendo una arquitectura limpia por capas:

```
src/
├── types/
│   └── photo.ts          # Definición de interfaces TypeScript (Photo)
├── services/
│   └── photoService.ts   # Capa de consumo y transformación de API asíncrona
├── hooks/
│   ├── usePhotos.ts      # Custom Hook: estado de fotos, timer 3s, favoritos y filtros
│   └── usePWA.ts         # Custom Hook: estado Online/Offline y prompt de instalación
├── components/
│   ├── Header.tsx        # Encabezado institucional UTL y status de red/PWA
│   ├── Banner.tsx        # Banner de presentación de la galería
│   ├── GalleryFilter.tsx # Barra de búsqueda y selector de categorías
│   ├── GalleryGrid.tsx   # Contenedor y renderizado en cuadrícula de fotos
│   ├── PhotoCard.tsx     # Tarjeta individual con acciones interactivas
│   ├── PhotoModal.tsx    # Modal lightbox para visualizar fotos en HD
│   ├── LoadingTimer.tsx  # Temporizador interactivo de carga de 3 segundos
│   └── PWABadge.tsx      # Gestión del Service Worker y actualizaciones
└── App.tsx               # Orquestador principal limpio y declarativo
```

---

## 🧪 Ejecución Local

1. **Desarrollo:**
   ```bash
   pnpm dev
   ```

2. **Compilar PWA (Build con Service Worker y Manifest):**
   ```bash
   pnpm build
   ```

3. **Previsualización de Producción:**
   ```bash
   pnpm preview
   ```

---

## 🚀 Despliegue en Netlify
El proyecto incluye [`netlify.toml`](./netlify.toml) y [`public/_redirects`](./public/_redirects) optimizados para SPA y cacheo de Service Worker.
