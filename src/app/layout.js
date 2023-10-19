import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import "../globals.css";
import { Koulen } from "next/font/google";
import { WeatherContextProvider } from "../context/weather";

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
      <WeatherContextProvider>
        <body className={koulen.className}>
          <Header />
          {children}
          <Info />
        </body>
      </WeatherContextProvider>
    </html>
  );
}
