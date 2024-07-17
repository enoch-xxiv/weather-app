import { getWeatherData } from './modules/app';

const days = getWeatherData('London');

console.log(days);
