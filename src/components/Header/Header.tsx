import type { NavLinks } from "@/types/content";

import { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import useDesktop from "@/hooks/useDesktop";
import Burger from "@/components/Buttons/Burger/Burger";
import logo from "@/assets/images/logo.png";

interface Header {
  content: {
    nav_links_left: NavLinks[];
    nav_links_right: NavLinks[];
  };
}

function Header({ content }: Header) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop] = useDesktop();

  const router = useRouter();

  const { locale } = router;

  const changeLanguage = (locale: string) => {
    void router.push(router.pathname, router.asPath, { locale });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fixed left-0 top-0 z-10 w-full bg-black">
      <div className="bg-slate-100">
        <div className="container flex h-8 justify-end gap-4">
          <button
            className={cn("uppercase", locale === "es" && "font-bold")}
            onClick={() => changeLanguage("es")}
          >
            ES 🇪🇸
          </button>
          <button
            className={cn("uppercase", locale === "en" && "font-bold")}
            onClick={() => changeLanguage("en")}
          >
            EN 🇺🇸
          </button>
        </div>
      </div>
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
            "absolute right-0 top-24 z-20 w-full flex-col justify-around bg-transparent transition-colors duration-500 md:relative md:top-0 md:h-auto md:flex-row md:items-center md:border-none",
            isMenuOpen || isDesktop ? "flex" : "hidden",
            isMenuOpen && "bg-black",
          )}
        >
          {content.nav_links_left.map((link) => {
            return (
              <li className="p-4 text-center md:p-0" key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-light uppercase text-slate-300 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:text-slate-100"
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

          {content.nav_links_right.map((link) => {
            return (
              <li className="p-4 text-center md:p-0" key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-light uppercase text-slate-300 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:text-slate-100"
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
