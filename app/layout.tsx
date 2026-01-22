import "./globals.css";

export const metadata = {
  title: "Restaurant App",
  description: "Frontend Developer Technical Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
