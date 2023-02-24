import axios, { AxiosResponse } from 'axios';
import { IWeatherData } from '../model/types';

const OPEN_WEATHER_API_KEY = '28a8f05c963557091bfe4208e2e56763'

export const getWeatherData = async (city: string): Promise<AxiosResponse> => {
    return axios.get<IWeatherData>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);

}