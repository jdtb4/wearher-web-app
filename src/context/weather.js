"use client";

import React, { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const WeatherContext = createContext();

// 2. Crear el proveedor del contexto
const WeatherContextProvider = ({ children }) => {
  // 3. Definir el estado para almacenar el tiempo
  const [weather, setWeather] = useState("");

  // 4. Proporcionar el estado a través del contexto
  const contextValue = {
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

// 5. Crear un hook personalizado para acceder al contexto
const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(
      "useWeatherContext debe usarse dentro de WeatherContextProvider"
    );
  }

  return context;
};

export { WeatherContextProvider, useWeatherContext };
