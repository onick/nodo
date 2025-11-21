import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Bell, History } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Líderes en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Rastreo Satelital</span> en RD
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-400">
                Protege lo que más te importa con nuestra tecnología de punta. Monitoreo 24/7, alertas inteligentes y cobertura nacional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
              <Button size="lg" className="h-12 px-8 text-lg" asChild>
                <Link href="/tienda">Ver Equipos</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg" asChild>
                <Link href="https://gps.ruteame.com">Plataforma Ruteame</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Rastreo en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Visualiza la ubicación exacta de tus vehículos en todo momento desde tu celular o computadora.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Bell className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Alertas Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Recibe notificaciones instantáneas por encendido, apagado, exceso de velocidad y salida de zonas.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <History className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Historial de Rutas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Accede al historial completo de recorridos, paradas y kilometraje de hasta 90 días atrás.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
