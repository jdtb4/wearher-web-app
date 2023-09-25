import "./globals.css";

export const metadata = {
  title: "Wether.",
  description: "Wether. es una aplicación web para ver el clima de tu ciudad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
