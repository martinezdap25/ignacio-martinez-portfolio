'use client';

import { useTheme } from '@/context/ThemeProvider';
import Header from '@/components/header/Header';

export default function Page() {
  const { darkMode } = useTheme();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        <h1 className="text-4xl font-bold">Hola, esta es la página principal</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          {darkMode
            ? 'Estás en modo oscuro, todo se ve genial.'
            : 'Estás en modo claro, disfrútalo.'}
        </p>
      </main>
    </>
  );
}
