import { getWeatherData } from './modules/getWeatherData';
import renderData from './modules/renderData';
import * as css from './style.css';

const form = document.querySelector('#form');
const titleCard = document.querySelector('.title-card');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const city = formData.get('location');
        const data = await getWeatherData(city);
        form.reset();
        renderData(data);
        let currentLocation = document.querySelector('#current-location');
        currentLocation.textContent = `Current Location: ${city}`;
        titleCard.append(currentLocation);
    } catch (error) {
        console.error(error);
    }
});
