import Header from "./components/Header";
import "./globals.css";
import { Koulen } from "next/font/google";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wether.",
  description: "Wether. is an app to check the weather in your city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={koulen.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
