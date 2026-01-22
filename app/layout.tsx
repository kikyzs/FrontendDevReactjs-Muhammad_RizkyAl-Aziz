import { ReactNode } from "react";
import "./globals.css"; // pastikan Tailwind CSS sudah di-import

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-blue-900 text-white p-4">
          <h1 className="text-2xl font-bold">My Restaurants</h1>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          © 2026 Frontend Dev Project
        </footer>
      </body>
    </html>
  );
}
