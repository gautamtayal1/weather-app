import "./styles.css"

let temperature 
let humidity  
let wind  
let icon 
let city

const cityInput = document.querySelector('#city-name')
const citySubmit = document.querySelector('#submit-city')

citySubmit.addEventListener('click', (e) => {
    e.preventDefault();
    city = cityInput.value;

    const API_KEY = "9e7b5d8533886ac12abc5583e665ce32"
    const API_QUERY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}` 

    const weatherTemp = document.querySelector('.weather-temp')
    const weatherCity = document.querySelector('.weather-city')
    const weatherHumidity = document.querySelector('.humidity-num')
    const weatherWind = document.querySelector('.wind-num')
    const weatherIcon = document.querySelector('img')


    async function getWeather() {
        const getData = await fetch(API_QUERY)
        const response = await getData.json()
        city = response.name
        temperature = response.main.temp;
        humidity = response.main.humidity;
        wind = response.wind.speed;
        icon = response.weather[0].icon;
    }

    async function main() {
        await getWeather(); // Wait for weather data to load
        weatherTemp.innerHTML = temperature
        weatherHumidity.innerHTML = `${humidity}%`
        weatherWind.innerHTML = `${wind} km/h`
        weatherIcon.innerHTML = icon
        weatherCity.innerHTML = city
    }

    main();
})




