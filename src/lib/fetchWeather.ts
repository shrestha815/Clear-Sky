export async function fetchWeather(city: string) {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
        throw new Error('Please enter a valid city name');
    }
    const data = await res.json();
    return {
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
    };
}