'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType } from "@/global/assets/ts/types";

export const ActiveLink = ({ href, label, description, icon } : LinkType) => {
  const pathname = usePathname();

  return (
    <Link 
        href={href} 
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${pathname === href ? 'bg-blue-800' : ''} hover:bg-white/5 transition ease-linear duration-150`}
    >
        <div>
          { icon }
        </div>
    
        <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white"> {label} </span>
            <span className="text-sm text-white/50 hidden md:block"> {description} </span>
        </div>
    </Link>
  )
}
