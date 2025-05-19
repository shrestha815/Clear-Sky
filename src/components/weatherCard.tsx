import { getWeatherIcon } from "@/lib/getWeatherIcon"; // adjust import path
import { IconType } from "react-icons";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
  icon: string; // still using OpenWeather icon code
  humidity: number;
  windSpeed: number;
  description: string;
};

export default function WeatherCard({
  city,
  temperature,
  condition,
  icon,
  humidity,
  windSpeed,
  description,
}: WeatherData) {
  const IconComponent: IconType = getWeatherIcon(icon);

  return (
    <div className="bg-white dark:bg-gray-200 shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{city}</h2>
          <p className="capitalize text-gray-600 dark:text-gray-800 text-sm">{description}</p>
        </div>
        <IconComponent className="text-6xl text-yellow-400 dark:text-gray-800" />
      </div>
      <div className="mt-4 flex justify-around text-center">
        <div>
          <p className="text-3xl font-semibold">{Math.round(temperature)}°C</p>
          <p className="text-xs text-gray-400">Temperature</p>
        </div>
        <div>
          <p className="text-lg">{humidity}%</p>
          <p className="text-xs text-gray-400">Humidity</p>
        </div>
        <div>
          <p className="text-lg">{windSpeed} m/s</p>
          <p className="text-xs text-gray-400">Wind</p>
        </div>
      </div>
    </div>
  );
}
