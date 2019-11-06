const body = document.body
const url = `http://api.weatherstack.com/current?access_key=38e650a427ff3902a09ee9fd53184d76&query=New%20York
&units=f`
const widget = document.querySelector(".widget-container")

const currentWeather = document.querySelector(".current_weather")
const weatherImg = document.querySelector(".weather_img")
const cloudCover = document.querySelector('.clouds')
const chill = document.querySelector(".chill")
const humidity = document.querySelector(".humidity")
const downFall = document.querySelector(".precipation")

const main = async () => {
	const response = await axios.get(url)
	weatherData = response.data
	console.log(weatherData)
	weatherImgs = weatherData.current.weather_icons
	console.log(weatherImgs)

	currentWeather.innerHTML = weatherData.current.temperature
	cloudCover.innerHTML = weatherData.current.cloudcover
	chill.innerHTML = weatherData.current.feelslike
	humidity.innerHTML = weatherData.current.humidity
	downFall.innerHTML = weatherData.current.precip
	// weatherImg = weatherData.current.weather_icons
	console.log(weatherData.current.temperature)


	console.log('Working')
}

window.onload = main()
