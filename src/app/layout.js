import Header from "./components/Header";
import CityWeather from "./components/CityWeather";
import "./globals.css";

export const metadata = {
  title: "Wether.",
  description: "Wether. is an app to check the weather in your city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <CityWeather />
        {children}
      </body>
    </html>
  );
}
