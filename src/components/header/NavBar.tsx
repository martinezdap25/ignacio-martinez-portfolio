'use client';

import { useTheme } from '@/context/ThemeProvider';

const navLinks = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const { darkMode } = useTheme();

  return (
    <nav className="hidden md:flex gap-6">
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`relative cursor-pointer text-base font-medium transition-colors duration-300 group
            ${darkMode
              ? 'text-gray-700 hover:text-indigo-600'
              : 'text-gray-200 hover:text-indigo-400'
            }
          `}
        >
          {label}
          <span className="absolute left-0 -bottom-0.5 h-[2px] bg-indigo-500 w-0 group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
}
