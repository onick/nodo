# NODO - Plataforma Corporativa

Sitio web corporativo de NODO SRL, empresa líder en soluciones tecnológicas, IoT y desarrollo de software en República Dominicana.

## 🚀 Estructura del Proyecto

Este proyecto está construido con **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS** y **Shadcn/UI**.

### Páginas Principales

- **`/`** - Página corporativa de NODO (matriz)
- **`/gps`** - NODO GPS - Comercialización de equipos de rastreo satelital
- **`/ruteame`** - NODO Ruteame - Plataforma SaaS de gestión de flotas

## 🛠️ Tecnologías

- **Framework**: Next.js 15.1.0 (App Router)
- **React**: 19.0.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🌐 Estructura de Rutas

```
/                    → Página corporativa NODO
/gps                 → NODO GPS (Equipos de rastreo)
/ruteame             → NODO Ruteame (Gestión de flotas)
/contacto            → Página de contacto (pendiente)
```

## 🎨 Componentes Principales

### Layout Global
- **`SiteHeader`** - Navegación principal con mega menú
- **`SiteFooter`** - Footer global con enlaces y redes sociales

### Páginas
- **`app/page.tsx`** - Homepage corporativa NODO
- **`app/gps/page.tsx`** - Landing page NODO GPS
- **`app/ruteame/page.tsx`** - Landing page NODO Ruteame

### UI Components (Shadcn/UI)
- Badge
- Button
- Card
- Navigation Menu
- Dialog
- Input
- Sheet

## 🎯 Características

- ✅ Diseño responsive y mobile-first
- ✅ Navegación dinámica con mega menú
- ✅ Temas oscuros en páginas específicas
- ✅ Optimización de imágenes con Next.js Image
- ✅ SEO optimizado
- ✅ Componentes reutilizables
- ✅ TypeScript para type safety

## 🖼️ Assets

Los logos y recursos visuales se encuentran en:
- `public/images/` - Logos optimizados (SVG)
- `public/SVG/` - Archivos SVG originales

### Logos Disponibles
- `nodo-logo.svg` - Logo corporativo NODO
- `nodo-gps-black.svg` / `nodo-gps-white.svg` - Logo NODO GPS
- `nodo-ruteame-black.svg` / `nodo-ruteame-white.svg` - Logo NODO Ruteame

## 🚀 Despliegue

Este proyecto está optimizado para despliegue en:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Cualquier plataforma que soporte Next.js

### Variables de Entorno

Crear un archivo `.env.local`:

```env
# Agregar variables según sea necesario
NEXT_PUBLIC_SITE_URL=https://nodo.do
```

## 📝 Próximos Pasos

- [ ] Implementar página de contacto
- [ ] Agregar formularios de cotización
- [ ] Integrar CMS para contenido dinámico
- [ ] Implementar blog/noticias
- [ ] Agregar analytics (Google Analytics/Plausible)
- [ ] Optimizar SEO con metadata dinámica
- [ ] Implementar sitemap.xml
- [ ] Agregar tests (Jest/Playwright)

## 👥 Equipo

**NODO SRL** - Soluciones Tecnológicas Integrales

- 📍 Santo Domingo, República Dominicana
- 📞 809-362-7085
- 📧 info@nodo.do
- 🌐 [nodo.do](https://nodo.do)

## 📄 Licencia

© 2025 NODO SRL. Todos los derechos reservados.
