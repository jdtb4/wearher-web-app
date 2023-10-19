"use client";
import { IconSunrise } from "@tabler/icons-react";
import { IconSunset } from "@tabler/icons-react";
import { IconWind } from "@tabler/icons-react";
import { IconDroplets } from "@tabler/icons-react";
import { useWeatherContext } from "src/context/weather";

function WeatherInfo() {
  const { weather } = useWeatherContext();
  const sunrise = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  const sunset = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  const wind = parseInt(weather?.wind?.speed) * 3.6 + "km/h";
  const humidity = parseInt(weather?.main?.humidity) + "%";

  return (
    <div className="flex mt-[20px] px-[70px] gap-[20px] text-[#589DCE]">
      <div className="flex flex-col gap-[10px] text-2xl border-2 border-[#589DCE] rounded-xl p-[20px] w-[160px]">
        <p>Sunrise</p>
        <IconSunrise size={24} stroke={2.5} color="#589DCE" />
        <p>{sunrise}</p>
      </div>

      <div className="flex flex-col gap-[10px] text-2xl border-2 border-[#589DCE] rounded-xl p-[20px] w-[160px]">
        <p>Sunset</p>
        <IconSunset size={24} stroke={2.5} color="#589DCE" />
        <p>{sunset}</p>
      </div>

      <div className="flex flex-col gap-[10px] text-2xl border-2 border-[#589DCE] rounded-xl p-[20px] w-[160px]">
        <p>Wind</p>
        <IconWind size={24} stroke={2.5} color="#589DCE" />
        <p>{wind}</p>
      </div>

      <div className="flex flex-col gap-[10px] text-2xl border-2 border-[#589DCE] rounded-xl p-[20px] w-[160px]">
        <p>humidity</p>
        <IconDroplets size={24} stroke={2.5} color="#589DCE" />
        <p>{humidity}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
