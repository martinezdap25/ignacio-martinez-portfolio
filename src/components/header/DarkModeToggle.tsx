'use client';

import { useTheme } from '@/context/ThemeProvider';

export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();
    const primaryColor = '#4F46E5'; // Indigo-600

    return (
        <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className={`relative w-16 h-8 rounded-full cursor-pointer focus:outline-none transition-colors duration-300 group
        ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}
      `}
        >
            {/* Thumb */}
            <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-all duration-300`}
                style={{
                    backgroundColor: darkMode ? 'white' : primaryColor,
                    transform: darkMode ? 'translateX(32px)' : 'translateX(0)',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.15)', // glow suave
                }}
            />

            {/* Luna */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-1.5 left-2 w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'
                    }`}
                fill="white"
                viewBox="0 0 24 24"
            >
                <path d="M21.75 15.5a9 9 0 01-9.5-11 7 7 0 109.5 11z" />
            </svg>

            {/* Sol */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-1.5 right-2 w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'
                    }`}
                fill="none"
                stroke="#333333"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
            </svg>
        </button>
    );
}
