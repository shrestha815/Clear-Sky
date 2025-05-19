'use client';
import { useState } from "react";
import SearchBar from "@/components/searchBar";
import Navbar from "@/components/navbar";
import WeatherCard from "@/components/weatherCard";
import { fetchWeather } from "@/lib/fetchWeather";
import React from "react";
//import Link from "next/link";

export default function Home() {
  const [weather, setWeather] = useState<any> (null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCitySearch = async(city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    }
    catch {
      setError('Failed to fetch weather data');
      setWeather(null);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header>
      <Navbar />
      </header>
      <main className="min-h-screen bg-gray-900 dark:bg-gray-100 flex flex-col items-center justify-start p-4">
      <div className="flex flex-col items-center w-full">
        <div
        className={`w-full flex justify-center transition-all duration-300 ${
          weather ? "mt-16" : "mt-[35vh]"
        }`}
        >
        <SearchBar onSearch={handleCitySearch} />
        </div>
        {weather && (
        <div className="mb-6 mt-6 w-full flex justify-center">
          <WeatherCard {...weather} />
        </div>
        )}
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      </main>
    </div>
  );
}
