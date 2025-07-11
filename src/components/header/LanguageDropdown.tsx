'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeProvider';

const languages = [
    {
        code: 'ES',
        label: 'Español',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    },
    {
        code: 'EN',
        label: 'English',
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    },
];

export default function LanguageDropdown() {
    const { darkMode } = useTheme();
    const [langOpen, setLangOpen] = useState(false);
    const [language, setLanguage] = useState('ES');
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setLangOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = languages.find((l) => l.code === language);

    return (
        <div className="relative" ref={langRef}>
            <button
                onClick={() => setLangOpen(!langOpen)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className={`flex items-center gap-2 px-3 py-1 rounded-md font-semibold cursor-pointer select-none transition
          ${darkMode
                        ? 'bg-gray-700 text-indigo-300 hover:bg-gray-800'
                        : 'bg-white text-indigo-900 hover:bg-gray-100'
                    }`}
            >
                {currentLang && (
                    <Image
                        src={currentLang.flag}
                        alt={currentLang.label}
                        width={20}
                        height={20}
                        className="rounded-full object-cover"
                    />
                )}
                <span className="text-base font-normal">{currentLang?.label}</span>
                <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${langOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {langOpen && (
                <ul
                    role="listbox"
                    className={`absolute right-0 mt-1 w-36 rounded-md shadow-lg font-semibold overflow-hidden transition
            ${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-white text-indigo-900'}`}
                >
                    {languages.map(({ code, label, flag }) => (
                        <li
                            key={code}
                            role="option"
                            onClick={() => {
                                setLanguage(code);
                                setLangOpen(false);
                            }}
                            className={`cursor-pointer flex items-center gap-2 px-3 py-2 transition
                ${language === code
                                    ? darkMode
                                        ? 'bg-indigo-900 text-white'
                                        : 'bg-indigo-100 text-indigo-900'
                                    : darkMode
                                        ? 'hover:bg-gray-700'
                                        : 'hover:bg-indigo-100'
                                }`}
                            aria-selected={language === code}
                        >
                            <Image
                                src={flag}
                                alt={label}
                                width={24}
                                height={24}
                                priority
                                style={{ width: 24, height: 24 }}
                                className="rounded-full object-cover border border-white"
                            />
                            <span className="text-base font-normal">{label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}