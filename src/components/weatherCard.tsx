type weatherData = {
    city: string;
    temperature: number;
    condition: string;
    icon: string; //api stuff from openWeatherMap
    humidity: number;
    windSpeed: number;
    description: string;
};

export default function weatherCard({
    city,
    temperature,
    condition,
    icon,
    humidity,
    windSpeed,
    description,
}: weatherData) {
    return (
        <div>
            <p>I will add something here</p>
        </div>
    );
}