export default function renderData(arr) {
    const content = document.querySelector('#content');
    content.textContent = ' ';
    for (const i of arr) {
        let day = document.createElement('div');
        let date = document.createElement('h3');
        let temp = document.createElement('p');
        date.textContent = i.datetime.replace('2024-', '');
        temp.textContent = `${i.temp}°C`;
        day.append(date, temp);
        content.appendChild(day);
    }
}
