import { getWeatherData } from './modules/getWeatherData';
import renderData from './modules/renderData';
import * as css from './style.css';

const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const city = formData.get('city');
        const data = await getWeatherData(city);
        renderData(data);
    } catch (error) {
        console.error(error);
    }
});
