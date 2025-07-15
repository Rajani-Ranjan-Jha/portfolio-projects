import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Weather() {

  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState({
    city: 'Patna',
    country: 'India',
    temp: 34,
    humidity: 54,
    icon: '01d',
    windspeed: 5

  })
  const date = new Date()
  const API_KEY = import.meta.env.VITE_APP_ID
  // console.log(API_KEY)

  const search = async () => {
    try {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
      const data = await response.json()
      console.log(data)
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        windspeed: data.wind.speed
      })
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <>
      <div className='w-full h-screen bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 flex flex-col items-center'>
        <h1 className='text-4xl py-5 text-white font-semibold'>Weather App</h1>
        <div className="w-10/12 max-w-md flex flex-col justify-around items-center bg-white bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <div className="w-full flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder='Enter the location'
              className='p-2 shadow-md border border-indigo-600 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-indigo-800'
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') search() }}
            />
            <button
              className='p-2 bg-indigo-600 text-white rounded-r-xl shadow-md border-indigo-600  focus:ring-1 focus:ring-indigo-800'
              type='button'
              onClick={search}
            >
              Search
            </button>
          </div>
          <div className='w-full flex flex-col justify-around items-center bg-indigo-400 bg-opacity-50 rounded-xl p-4 py-8'>
            <div className='flex flex-col items-center mb-4'>
              <h2 className='text-4xl text-white font-semibold'>{weatherData.city}, {weatherData.country}</h2>
              <p className='text-white'>{date.toDateString()}</p>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
                className='mb-4'
              />
            </div>
            <ul className='w-full flex flex-col justify-center text-white text-lg font-medium'>
              <hr className='mb-2' />
              <li className='mb-2'>Temperature: {weatherData.temp}°C</li>
              <hr className='mb-2' />
              <li className='mb-2'>Humidity: {weatherData.humidity}%</li>
              <hr className='mb-2' />
              <li className='mb-2'>Wind Speed: {(weatherData.windspeed * 3.6).toFixed(1)} km/h</li>
              <hr className='mb-2' />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
