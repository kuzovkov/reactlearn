"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Рецепты", href: "/" },
  { label: "Ингридиенты", href: "/ingridients" },
  { label: "О нас", href: "/about" },
];

const authItems: NavItem[] = [
  { label: "Войти", href: "/login" },
  { label: "Зарегистрироваться", href: "/register" },
];

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
        <Image
          src="/tatar-kitchen.png"
          alt={siteConfig.title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent hidden sm:block">
        {siteConfig.title}
      </span>
    </Link>
  );
};

const NavLink = ({ item, isMobile, onClick }: { item: NavItem; isMobile: boolean; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  return (
  <Link
    key={item.href}
    href={item.href}
    onClick={onClick}
    className={`${isMobile ? "block px-4 py-3" : "px-4 py-2"} ${isActive ? "text-amber-400" : "text-gray-300 hover:text-amber-400"} font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 relative group`}
  >
    {item.label}
    {!isMobile && (
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 ${isActive ? "w-full" : "group-hover:w-full"} transition-all duration-300`} />
    )}
  </Link>
)};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-900/95 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">     
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} isMobile={false} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-4">
            {authItems.map((item) => (
              <NavLink key={item.href} item={item} isMobile={false} />
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-amber-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 bg-gray-900 rounded-b-lg space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} isMobile={true} onClick={() => setIsMenuOpen(false)} />
            ))}
            <div className="border-t border-gray-700 my-2" />
            {authItems.map((item) => (
              <NavLink key={item.href} item={item} isMobile={true} onClick={() => setIsMenuOpen(false)} />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}