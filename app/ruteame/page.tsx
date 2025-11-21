import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    MapPin,
    Smartphone,
    BarChart3,
    ShieldCheck,
    Fuel,
    Video,
    Clock,
    AlertTriangle,
    CheckCircle2
} from "lucide-react"

export default function RuteamePage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
                            🚀 Nueva Versión 3.0 Disponible
                        </Badge>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                            La Plataforma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gestión de Flotas</span> Definitiva
                        </h1>

                        <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
                            Optimiza operaciones, reduce costos de combustible y maximiza la seguridad de tus activos con Ruteame.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 min-w-[200px] pt-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contacto">Solicitar Demo Gratuita</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-700 text-white hover:bg-slate-800 hover:text-white" asChild>
                                <Link href="https://gps.ruteame.com">Iniciar Sesión</Link>
                            </Button>
                        </div>

                        {/* Dashboard Preview Placeholder */}
                        <div className="mt-12 w-full max-w-5xl mx-auto rounded-xl border border-slate-800 bg-slate-900/50 shadow-2xl overflow-hidden backdrop-blur-sm relative aspect-video group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-slate-500 font-medium">Vista Previa del Dashboard</p>
                            </div>
                            {/* Simulated UI Elements */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-white">+10k</h3>
                            <p className="text-sm text-slate-400">Vehículos Rastreados</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-white">99.9%</h3>
                            <p className="text-sm text-slate-400">Uptime Garantizado</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-white">24/7</h3>
                            <p className="text-sm text-slate-400">Soporte Técnico</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-white">RD$</h3>
                            <p className="text-sm text-slate-400">Ahorro en Combustible</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                            Todo lo que necesitas para tu flota
                        </h2>
                        <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                            Herramientas potentes diseñadas para darte el control total de tu operación logística.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={<MapPin className="h-10 w-10 text-blue-600" />}
                            title="Rastreo en Tiempo Real"
                            description="Visualización exacta de cada unidad en el mapa con actualizaciones segundo a segundo."
                        />
                        <FeatureCard
                            icon={<Fuel className="h-10 w-10 text-blue-600" />}
                            title="Control de Combustible"
                            description="Detecta robos, cargas y descargas anormales con nuestros sensores de alta precisión."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="h-10 w-10 text-blue-600" />}
                            title="Mantenimiento Preventivo"
                            description="Alertas automáticas para cambios de aceite, gomas y servicios basados en kilometraje."
                        />
                        <FeatureCard
                            icon={<AlertTriangle className="h-10 w-10 text-blue-600" />}
                            title="Alertas Instantáneas"
                            description="Notificaciones por exceso de velocidad, salida de geocercas, encendido no autorizado y más."
                        />
                        <FeatureCard
                            icon={<BarChart3 className="h-10 w-10 text-blue-600" />}
                            title="Reportes Avanzados"
                            description="Genera informes detallados de rutas, paradas, tiempos de motor y eficiencia de conducción."
                        />
                        <FeatureCard
                            icon={<Video className="h-10 w-10 text-blue-600" />}
                            title="Video Telemetría"
                            description="Cámaras integradas (Dashcams) para evidencia en video y monitoreo de cabina en vivo."
                        />
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Feature 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                        <div className="flex-1 space-y-6">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Ahorro Garantizado</Badge>
                            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                                Elimina el Robo de Combustible
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                El combustible es el mayor gasto operativo de tu flota. Con Ruteame, obtienes gráficos precisos del nivel de combustible en tiempo real. Detecta extracciones no autorizadas al instante y valida cada carga en la estación.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Precisión del 99.5% con sensores ultrasónicos.</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Alertas de drenaje vía SMS y Email.</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Reportes de consumo vs. distancia recorrida.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl h-[400px] w-full flex items-center justify-center border border-slate-200 shadow-lg">
                            <Fuel className="h-32 w-32 text-slate-300" />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none">Control Total</Badge>
                            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                                Tu Flota en la Palma de tu Mano
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                No necesitas estar en la oficina para supervisar. Nuestra App Móvil nativa (iOS y Android) te permite gestionar todo desde cualquier lugar.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Ubicación en tiempo real en Google Maps.</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Comandos remotos (Apagado de motor).</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Notificaciones Push instantáneas.</span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button variant="outline" className="gap-2">
                                    <Smartphone className="h-4 w-4" />
                                    Descargar App
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl h-[400px] w-full flex items-center justify-center border border-slate-200 shadow-lg">
                            <Smartphone className="h-32 w-32 text-slate-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                        ¿Listo para modernizar tu flota?
                    </h2>
                    <p className="text-blue-100 md:text-xl max-w-2xl mx-auto mb-10">
                        Únete a las más de 500 empresas en República Dominicana que confían en Smart GPS y Ruteame.
                    </p>
                    <Button size="lg" className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50" asChild>
                        <Link href="/contacto">Solicitar Cotización</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
                <div className="bg-blue-50 w-fit p-4 rounded-2xl mb-4">
                    {icon}
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-slate-600 leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
