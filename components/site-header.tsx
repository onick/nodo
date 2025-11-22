"use client"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart, Menu, Truck, Smartphone, Map, X } from "lucide-react"

export function SiteHeader() {
    const pathname = usePathname()
    const isRuteame = pathname === "/ruteame"
    const isCorporate = pathname === "/"
    const isDarkHeader = isRuteame || isCorporate
    const [mounted, setMounted] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full border-b backdrop-blur transition-colors duration-300",
            isDarkHeader
                ? "bg-slate-950 supports-[backdrop-filter]:bg-slate-950/90 border-slate-800 text-white"
                : "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border"
        )}>
            <div className="container mx-auto flex h-16 items-center">
                {/* Logo - Left */}
                <div className="mr-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={isRuteame ? "/images/nodo-ruteame-white.svg" : isCorporate ? "/images/nodo-logo.svg" : "/images/nodo-gps-black.svg"}
                            alt="NODO"
                            width={isRuteame ? 180 : 120}
                            height={40}
                            className={cn("h-8 w-auto", isCorporate && "invert")}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex flex-1 justify-center">
                    {mounted && (
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn(isDarkHeader && "bg-transparent text-white hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white data-[active]:bg-slate-800 data-[state=open]:bg-slate-800")}>
                                        Productos y Soluciones
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[1fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100 to-slate-200 p-6 no-underline outline-none focus:shadow-md dark:from-slate-800 dark:to-slate-900"
                                                        href="/ruteame"
                                                    >
                                                        <Truck className="h-6 w-6 text-primary mb-4" />
                                                        <div className="mb-2 mt-4 text-lg font-medium text-slate-900 dark:text-white">
                                                            Plataforma Ruteame
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Gestión de flotas avanzada. Control total de tus vehículos, combustible y rutas en una sola plataforma.
                                                        </p>
                                                        <div className="mt-4 text-sm font-bold text-primary flex items-center">
                                                            Explorar ahora →
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/gps" title={
                                                <Image
                                                    src="/images/nodo-gps-black.svg"
                                                    alt="NODO GPS"
                                                    width={100}
                                                    height={24}
                                                    className="h-6 w-auto"
                                                />
                                            } icon={<Truck className="h-4 w-4" />}>
                                                Localizadores de alta precisión para autos y camiones.
                                            </ListItem>
                                            <ListItem href="/ruteame" title={
                                                <Image
                                                    src="/images/nodo-ruteame-black.svg"
                                                    alt="NODO Ruteame"
                                                    width={120}
                                                    height={24}
                                                    className="h-6 w-auto"
                                                />
                                            } icon={<Map className="h-4 w-4" />}>
                                                Dispositivos compactos y resistentes al agua.
                                            </ListItem>
                                            <ListItem href="/ruteame" title="App Móvil" icon={<Smartphone className="h-4 w-4" />}>
                                                Monitorea tu flota desde cualquier lugar con nuestra App.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/gps" className={cn(navigationMenuTriggerStyle(), isDarkHeader && "bg-transparent text-white hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white")}>
                                            Tienda
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/contacto" className={cn(navigationMenuTriggerStyle(), isDarkHeader && "bg-transparent text-white hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white")}>
                                            Contacto
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    )}
                </div>

                {/* Icons - Right */}
                <div className="flex items-center gap-4 ml-auto">
                    <Button variant="ghost" size="icon" className={cn(isDarkHeader && "text-white hover:bg-slate-800 hover:text-white")}>
                        <ShoppingCart className="h-5 w-5" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn("md:hidden", isDarkHeader && "text-white hover:bg-slate-800 hover:text-white")}>
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Menú</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8">
                                {/* Productos y Soluciones */}
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-lg">Productos y Soluciones</h3>
                                    <Link
                                        href="/ruteame"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Truck className="h-5 w-5 text-primary" />
                                        <div>
                                            <div className="font-medium">NODO | Ruteame</div>
                                            <div className="text-sm text-muted-foreground">Gestión de flotas</div>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/gps"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Truck className="h-5 w-5 text-primary" />
                                        <div>
                                            <div className="font-medium">NODO | GPS</div>
                                            <div className="text-sm text-muted-foreground">Rastreo satelital</div>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/ruteame"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Smartphone className="h-5 w-5 text-primary" />
                                        <div>
                                            <div className="font-medium">App Móvil</div>
                                            <div className="text-sm text-muted-foreground">Monitoreo desde tu celular</div>
                                        </div>
                                    </Link>
                                </div>

                                {/* Divider */}
                                <div className="border-t my-2"></div>

                                {/* Main Links */}
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                                <Link
                                    href="/gps"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Tienda
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contacto
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    Omit<React.ComponentPropsWithoutRef<"a">, "title"> & { icon?: React.ReactNode; href: string; title: React.ReactNode }
>(({ className, title, children, icon, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 text-sm font-medium leading-none text-slate-900 dark:text-white">
                        {icon && <span className="text-primary">{icon}</span>}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
