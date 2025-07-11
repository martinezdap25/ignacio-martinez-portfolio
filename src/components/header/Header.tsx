'use client';

import Logo from './Logo';
import Navbar from './NavBar';
import DarkModeToggle from './DarkModeToggle';
import LanguageDropdown from './LanguageDropdown';
import { useTheme } from '@/context/ThemeProvider';

export default function Header() {
    const { darkMode } = useTheme();

    const bgGradient = darkMode
        ? 'bg-gradient-to-r from-gray-100 to-gray-200'
        : 'bg-gradient-to-r from-indigo-600 to-indigo-700';

    const textColor = darkMode ? 'text-gray-900' : 'text-white';

    return (
        <header className={`w-full ${bgGradient} ${textColor} shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Logo />
                <Navbar />
                <div className="flex items-center gap-4">
                    <DarkModeToggle />
                    <LanguageDropdown />
                </div>
            </div>
        </header>
    );
}
