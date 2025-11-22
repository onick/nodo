# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar el proyecto NODO en Vercel con tu dominio personalizado nodo.do.

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Acceso al repositorio GitHub: https://github.com/onick/nodo
- Acceso a la configuración DNS de nodo.do

## 🚀 Pasos para Desplegar

### 1. Importar Proyecto en Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "Add New..." → "Project"
3. Selecciona "Import Git Repository"
4. Busca y selecciona el repositorio `onick/nodo`
5. Click en "Import"

### 2. Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Configuración recomendada:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (raíz del proyecto)
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)

### 3. Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:

```env
NEXT_PUBLIC_SITE_URL=https://nodo.do
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Cuando tengas Google Analytics
```

### 4. Desplegar

1. Click en "Deploy"
2. Espera a que termine el build (2-3 minutos)
3. Tu sitio estará disponible en una URL temporal de Vercel (ej: `nodo-xyz.vercel.app`)

## 🌐 Configurar Dominio Personalizado (nodo.do)

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Click en "Settings" → "Domains"
3. Agrega tu dominio: `nodo.do`
4. También agrega: `www.nodo.do`
5. Vercel te mostrará los registros DNS que necesitas configurar

### En tu Proveedor de DNS:

Necesitarás agregar estos registros DNS (los valores exactos te los dará Vercel):

**Para el dominio raíz (nodo.do):**
```
Type: A
Name: @
Value: 76.76.21.21 (IP de Vercel)
```

**Para www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Verificación (opcional pero recomendado):**
```
Type: TXT
Name: _vercel
Value: [código que te da Vercel]
```

### Tiempo de Propagación

- Los cambios DNS pueden tardar de 5 minutos a 48 horas
- Generalmente toma 15-30 minutos

## ✅ Verificación

Una vez configurado, verifica:

1. ✅ `https://nodo.do` carga correctamente
2. ✅ `https://www.nodo.do` redirige a `https://nodo.do`
3. ✅ Certificado SSL activo (candado verde)
4. ✅ Todas las páginas funcionan: `/`, `/gps`, `/ruteame`

## 🔄 Despliegues Automáticos

Vercel está configurado para:

- ✅ **Producción**: Cada push a `main` despliega automáticamente
- ✅ **Preview**: Cada Pull Request crea un preview deployment
- ✅ **Rollback**: Puedes volver a versiones anteriores desde el dashboard

## 📊 Monitoreo

En el dashboard de Vercel puedes ver:

- Analytics de tráfico
- Logs de errores
- Métricas de rendimiento (Core Web Vitals)
- Uso de recursos

## 🔧 Configuración Avanzada

### Headers de Seguridad

Ya están configurados en `next.config.ts`:
- ✅ HSTS
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ CSP básico

### Optimizaciones

Ya configuradas:
- ✅ Compresión automática
- ✅ Optimización de imágenes (AVIF/WebP)
- ✅ Edge caching
- ✅ Minificación automática

## 🆘 Solución de Problemas

### Error: "Domain is not verified"
- Espera 15-30 minutos para propagación DNS
- Verifica que los registros DNS estén correctos

### Error de Build
- Revisa los logs en Vercel
- Asegúrate que `npm run build` funciona localmente

### Sitio lento
- Vercel usa CDN global automáticamente
- Revisa Analytics para identificar páginas lentas

## 📞 Soporte

- [Documentación Vercel](https://vercel.com/docs)
- [Documentación Next.js](https://nextjs.org/docs)
- [Comunidad Vercel](https://github.com/vercel/vercel/discussions)

## 🎉 ¡Listo!

Tu sitio NODO estará en producción en https://nodo.do con:
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Despliegues automáticos
- ✅ Optimización de rendimiento
- ✅ Analytics incluido
