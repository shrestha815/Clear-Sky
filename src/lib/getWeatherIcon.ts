import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayCloudy,
  WiNightClear,
  WiNightCloudy,
} from "react-icons/wi";
import { IconType } from "react-icons";

export function getWeatherIcon(iconCode: string): IconType {
  const iconMap: Record<string, IconType> = {
    '01d': WiDaySunny,
    '01n': WiNightClear,
    '02d': WiDayCloudy,
    '02n': WiNightCloudy,
    '03d': WiCloudy,
    '03n': WiCloudy,
    '04d': WiCloudy,
    '04n': WiCloudy,
    '09d': WiRain,
    '09n': WiRain,
    '10d': WiRain,
    '10n': WiRain,
    '11d': WiThunderstorm,
    '11n': WiThunderstorm,
    '13d': WiSnow,
    '13n': WiSnow,
    '50d': WiFog,
    '50n': WiFog,
  };

  return iconMap[iconCode] || WiCloudy; // default fallback
}