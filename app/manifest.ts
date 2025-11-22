import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'NODO SRL - Soluciones Tecnológicas',
        short_name: 'NODO',
        description: 'Empresa líder en soluciones tecnológicas, IoT, rastreo GPS y desarrollo de software en República Dominicana',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
