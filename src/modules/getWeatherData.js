async function getWeatherData(city) {
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next6days?unitGroup=metric&key=3MQSLLSTWCWD258QLJ9WUADKE&contentType=json&include=days&elements=datetime,temp`
    );
    const queryData = await response.json();
    const days = queryData.days;
    return days;
}

export { getWeatherData };
