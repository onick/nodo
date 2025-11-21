import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/nodo-logo.svg"
                                alt="NODO"
                                width={120}
                                height={40}
                                className="h-8 w-auto invert"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empresa de tecnología líder en soluciones de conectividad, IoT y desarrollo de software. Transformamos negocios a través de la innovación.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Soluciones</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/gps" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    NODO GPS
                                </Link>
                            </li>
                            <li>
                                <Link href="/ruteame" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    NODO Ruteame
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    IoT & Conectividad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Desarrollo de Software
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/gps" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Tienda
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Soporte
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-slate-400">
                                    Santo Domingo, República Dominicana
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-slate-400">809-362-7085</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-slate-400">info@nodo.do</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} NODO SRL. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
