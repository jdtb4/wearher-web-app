"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

const Search = () => {
  const [city, setCity] = useState("");
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  function searchWeather() {
    const apiKey = "fb154294fc45dfa9596241167b0ac259";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    if (city === "") return alert("Please enter a city name");
  }

  return (
    <div className="relative pt-[40px]">
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter a city name"
        className="border-2 border-[#589DCE] rounded-lg p-2 w-[410px] active:outline-none focus:outline-none placeholder:text-[#589DCE] placeholder:opacity-50"
      />
      <div className="absolute right-2 top-[60%]">
        <IconSearch
          size={24}
          stroke={1.5}
          color="#589DCE"
          onClick={searchWeather}
        />
      </div>
    </div>
  );
};

export default Search;
