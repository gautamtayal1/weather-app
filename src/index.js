import "./styles.css"

let temperature 
let humidity  
let wind  
let icon 
let city

const card = document.querySelector('.weather-card')
const cityInput = document.querySelector('#city-name')
const citySubmit = document.querySelector('#submit-city')

citySubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!cityInput.value.trim()) return

    card.style.display = 'block'
    city = cityInput.value.trim();

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
        weatherTemp.innerHTML = `${(temperature - 273.15).toFixed(0)}°C`
        weatherHumidity.innerHTML = `${humidity}%`
        weatherWind.innerHTML = `${wind} km/h`
        weatherCity.innerHTML = city
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`

    }

    main();
})




