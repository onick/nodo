import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
    Globe,
    Cpu,
    Wifi,
    Code,
    ShieldCheck,
    Server
} from "lucide-react"

export default function NodoPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20">
                            NODO SRL
                        </Badge>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
                            Soluciones Tecnológicas <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Integrales e Innovadoras</span>
                        </h1>

                        <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
                            Líderes en conectividad IoT, desarrollo de software y seguridad electrónica. Transformamos tu negocio con tecnología de punta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 min-w-[200px] pt-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contacto">Contáctanos</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-slate-900" asChild>
                                <Link href="/gps">Ver Productos</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                            Nuestras Divisiones
                        </h2>
                        <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                            Un ecosistema completo de servicios tecnológicos para empresas modernas.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard
                            icon={<Wifi className="h-10 w-10 text-blue-600" />}
                            title="Conectividad IoT"
                            description="Tarjetas SIM globales para conectividad M2M. Gestión autónoma y cobertura garantizada para tus dispositivos."
                        />
                        <ServiceCard
                            icon={<Cpu className="h-10 w-10 text-blue-600" />}
                            title="NODO GPS"
                            description="Comercialización de equipos de rastreo de última generación para vehículos, activos y personas."
                        />
                        <ServiceCard
                            icon={<Globe className="h-10 w-10 text-blue-600" />}
                            title="NODO Ruteame"
                            description="Plataforma SaaS de gestión de flotas. Monitoreo en tiempo real, telemetría y control de combustible."
                        />
                        <ServiceCard
                            icon={<Code className="h-10 w-10 text-blue-600" />}
                            title="Desarrollo de Software"
                            description="Soluciones a medida, aplicaciones móviles y sistemas web diseñados para escalar tu negocio."
                        />
                        <ServiceCard
                            icon={<ShieldCheck className="h-10 w-10 text-blue-600" />}
                            title="Ciberseguridad"
                            description="Protección avanzada para tu infraestructura digital. Auditorías, consultoría y monitoreo de amenazas."
                        />
                        <ServiceCard
                            icon={<Server className="h-10 w-10 text-blue-600" />}
                            title="Infraestructura Cloud"
                            description="Servicios de nube, hosting y virtualización para garantizar la disponibilidad de tus operaciones."
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                                Sobre NODO
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Somos una empresa de tecnología que brinda soluciones de consultoría, eCommerce, seguridad y outsourcing de servicios informáticos.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Contamos con un equipo de profesionales altamente calificados que responden ampliamente a las acciones que cada proyecto demanda, entregando así soluciones digitales integrales a nuestros clientes, desde su conceptualización y diseño, pasando por el desarrollo, ejecución, lanzamiento y seguimiento.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl h-[400px] w-full flex items-center justify-center border border-slate-200 shadow-lg">
                            {/* Placeholder for company image */}
                            <div className="text-center p-8">
                                <Image
                                    src="/images/nodo-logo.svg"
                                    alt="NODO"
                                    width={240}
                                    height={80}
                                    className="h-20 w-auto mb-4"
                                />
                                <p className="text-slate-400">Innovación y Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                        Impulsa tu empresa con NODO
                    </h2>
                    <p className="text-blue-100 md:text-xl max-w-2xl mx-auto mb-10">
                        Contáctanos hoy para descubrir cómo nuestras soluciones pueden transformar tu negocio.
                    </p>
                    <Button size="lg" className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50" asChild>
                        <Link href="/contacto">Hablar con un Asesor</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
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
