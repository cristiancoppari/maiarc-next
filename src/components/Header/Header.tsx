import type { NavLinks, DropdownLink } from "@/types/content";
import { useState } from "react";
import { useRouter } from "next/router";
import useDesktop from "@/hooks/useDesktop";

import Link from "next/link";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Burger from "@/components/Buttons/Burger/Burger";

import logo from "@/assets/images/logo-gray.png";

interface Header {
  content: {
    nav_links_left: NavLinks[];
    nav_links_right: NavLinks[];
  };
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    display: "none",
    height: 0,
  },
  visible: {
    opacity: 1,
    display: "flex",
    height: "auto",
    transition: { duration: 0.5 },
  },
};

function Header({ content }: Header) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop] = useDesktop();
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const { locale } = router;

  const changeLanguage = (newLocale: string) => {
    const { pathname, query } = router;
    void router.push({ pathname, query }, undefined, { locale: newLocale });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fixed left-0 top-0 z-10 w-full backdrop-blur-sm">
      <div className="bg-slate-100">
        <div className="container flex h-8 items-center justify-end gap-4">
          <button
            className={cn("uppercase", locale === "es" && "font-bold")}
            onClick={() => changeLanguage("es")}
          >
            ESPAÑOL
          </button>
          <span className="text-slate-900">l</span>
          <button
            className={cn("uppercase", locale === "en" && "font-bold")}
            onClick={() => changeLanguage("en")}
          >
            ENGLISH
          </button>
        </div>
      </div>
      <div className="bg-black opacity-80">
        <div
          className={cn(
            "container mx-auto flex h-16 items-center justify-between md:justify-center",
          )}
        >
          {!isDesktop && (
            <Link href="/">
              <img src={logo.src} alt="" className="h-auto w-20" />
            </Link>
          )}

          <Burger
            classes="block md:hidden"
            onClick={toggleMenu}
            isOpen={isMenuOpen}
          />

          <ul
            className={cn(
              "absolute right-0 top-24 z-20 w-full flex-col justify-around transition-colors duration-500 md:relative md:top-0 md:h-full md:flex-row md:items-center md:border-none",
              isMenuOpen || isDesktop ? "flex" : "hidden",
              isMenuOpen && "bg-black",
            )}
          >
            {content.nav_links_left.map((link) => {
              if (link.type === "dropdown") {
                return (
                  <li
                    className="relative grid place-items-center text-sm font-light uppercase text-slate-300 transition-all duration-300 ease-in-out hover:text-slate-100 md:h-full"
                    key={link.label}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {link.label}
                    <motion.ul
                      className="top-full flex flex-col items-center bg-black md:absolute md:items-start"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate={isHovered ? "visible" : "hidden"}
                    >
                      {(link as DropdownLink).items.map((item) => (
                        <li
                          className="w-max px-4 py-2 text-sm font-light uppercase text-slate-300 opacity-80 transition-all duration-300 ease-in-out hover:text-slate-100"
                          key={item.label}
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  </li>
                );
              } else {
                return (
                  <li
                    className="grid h-full place-items-center p-4 text-center md:p-0"
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-light uppercase text-slate-300 transition-all duration-300 ease-in-out hover:text-slate-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }
            })}

            {isDesktop && (
              <Link href="/">
                <img src={logo.src} alt="" className="h-auto w-20" />
              </Link>
            )}

            {content.nav_links_right.map((link) => {
              return (
                <li
                  className="grid h-full place-items-center p-4 text-center md:p-0"
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-light uppercase text-slate-300 transition-all duration-300 ease-in-out hover:text-slate-100"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
