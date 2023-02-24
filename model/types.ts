export interface IWeatherData {
    cod: string;
    list: List[];
    city: City;
}

interface City {
    name: string;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}



interface List {
    dt: number;
    main: Main;
    weather: Weather[];
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
}

interface Sys {
    pod: string;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}


interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}