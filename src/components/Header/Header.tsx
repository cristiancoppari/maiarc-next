"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useDesktop from "@/hooks/useDesktop";
import Burger from "@/components/Buttons/Burger/Burger";
import logo from "@/assets/images/logo.png";

const nav_links_left = [
    {
        label: "Quiénes somos",
        href: "/",
    },
    {
        label: "Los destinos",
        href: "/destinos",
    },
    {
        label: "Real Estate",
        href: "/real-estate",
    },
];

const nav_links_right = [
    {
        label: "Experiencias únicas",
        href: "/experiencias-unicas",
    },
    {
        label: "Superyates",
        href: "/superyates",
    },
    {
        label: "Contacto",
        href: "/contacto",
    },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop] = useDesktop();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header fixed left-0 top-0 z-10 w-full bg-black">
            <div
                className={cn(
                    "container mx-auto flex h-16 items-center justify-between p-4 md:justify-center",
                )}
            >
                {!isDesktop && (
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Alertas Seguridad Privada"
                            className="h-auto w-20"
                        />
                    </Link>
                )}

                <Burger
                    classes="block md:hidden"
                    onClick={toggleMenu}
                    isOpen={isMenuOpen}
                />

                <ul
                    className={cn(
                        "absolute right-0 top-16 z-20 w-full flex-col justify-around border-l bg-transparent transition-colors duration-500 md:relative md:top-0 md:h-auto md:flex-row md:items-center md:border-none",
                        isMenuOpen || isDesktop ? "flex" : "hidden",
                        isMenuOpen && "bg-slate-900 opacity-90",
                    )}
                >
                    {nav_links_left.map((link) => {
                        return (
                            <li
                                className="p-4 text-center md:p-0"
                                key={link.label}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold uppercase text-slate-300 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:text-slate-100"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}

                    {isDesktop && (
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Alertas Seguridad Privada"
                                className="h-auto w-20"
                            />
                        </Link>
                    )}

                    {nav_links_right.map((link) => {
                        return (
                            <li
                                className="p-4 text-center md:p-0"
                                key={link.label}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold uppercase text-slate-300 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:text-slate-100"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Header;
