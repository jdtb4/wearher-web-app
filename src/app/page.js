"use client";
import { useWeatherContext } from "@/context/weather";
import { useState } from "react";

export default function Home() {
  const { weather } = useWeatherContext();
  const [locate, setLocate] = useState("");
  const description = weather?.weather?.[0]?.description;
  const icon = weather?.weather?.[0]?.icon;
  const temp = parseInt(weather?.main?.temp) + "°C";
  const hour = new Date(weather?.dt * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = new Date(weather?.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });

  async function getlocation() {
    if ("geolocation" in navigator) {
      const apiKey = "fb154294fc45dfa9596241167b0ac259";

      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&#38;lon=${longitude}&#38;appid=${apiKey}&#38;units=metric`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        setLocate(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  getlocation();

  return (
    <main className="flex items-center justify-between px-[50px] mx-[70px] border-2 border-[#589DCE] rounded-xl h-[250px]">
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          className="text-[#589DCE] text-5xl font-bold"
          alt="weather icon"
          width={100}
          height={100}
        />

        <p className="text-[#589DCE] text-4xl font-bold">{temp}</p>
        <p className="text-[#589DCE] text-3xl font-bold">{weather.name}</p>
      </div>
      <div>
        <p className="text-[#589DCE] text-5xl font-bold pb-[10px]">{hour}</p>
        <p className="text-[#589DCE] text-4xl font-bold">{description}</p>
        <p className="text-[#589DCE] text-3xl font-bold">{day}</p>
      </div>
    </main>
  );
}
