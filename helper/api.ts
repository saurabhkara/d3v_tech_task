import axios from 'axios';

const OPEN_WEATHER_API_KEY = '28a8f05c963557091bfe4208e2e56763'

export const getWeatherData = async (city:string) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
        console.log(res);
        return Promise.resolve(res);
    } catch (error) {
        console.log(error);
        return Promise.reject(error)
    }
}