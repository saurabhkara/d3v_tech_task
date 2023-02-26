
//API Data type
export interface IWeatherData {
    cod: string;
    list: List[];
    city: City;
}

export interface City {
    name: string;
    country?: string;
    population?: number;
    timezone?: number;
    sunrise?: number;
    sunset?: number;
}



export interface List {
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

export interface IApiError {
    cod: string;
    message: string;
}


//type for Redux data type

export interface IStore {
    isLoading: boolean,
    isError: string,
    data: IWeatherData
    lastUpdated?:string,
}