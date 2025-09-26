import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { LinkType } from "@/global/assets/ts/types";
import { Calculator, Diameter, Heart, LayoutDashboard, } from "lucide-react";

const menuItems: LinkType[] = [
    {
        href: '/main',
        label: 'Dashboard',
        description: 'Visualización',
        icon: <LayoutDashboard className="w-8 h-8" />
    }, 
    {
        href: '/counter',
        label: 'Counter',
        description: 'Estado local',
        icon: <Calculator className="w-8 h-8" />
    },
    {
        href: '/pokemons',
        label: 'Pokemons',
        description: 'Generación Estatica',
        icon: <Diameter className="w-8 h-8" />
    },
    {
        href: '/pokemons/favorites',
        label: 'Mis Pokemons Favoritos',
        description: 'Mis pokemons favoritos',
        icon: <Heart className="w-8 h-8" />
    },
];

export const Sidebar = () => {
  return (
    <div id="menu" style={{ width: '400px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">
        <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">
                <span> Primeros </span>
                <span className="text-blue-500"> Pasos</span>.
            </h1>
            <p className="text-slate-500 text-sm">Mis primeros pasos en Next</p>
        </div>

        <div id="profile" className="px-6 py-10">
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image 
                        alt="User avatar"
                        className="rounded-full w-8 h-8"
                        width={50}
                        height={50}
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                    />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Andrés Cardona
                </span>
            </a>
        </div>

        <div id="nav" className="w-full px-6">
            {menuItems.map(item => (
                <ActiveLink key={item.href} {...item} />
            ))}
        </div>

    </div>
  )
}
