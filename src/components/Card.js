import React from 'react'

function Card({data}) {
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
  return (
    <>
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-white dark:bg-gray-900 dark:text-gray-100">
            <div className="text-center">
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <p className="text-sm dark:text-gray-400">{month} {day}</p>
            </div>
            <img src={`icons/${data ? data.weather[0].icon : "unknown"}.png`}  className="w-32 h-32 p-6 dark:text-yellow-400 fill-current" />
            <div className="mb-2 text-3xl font-semibold"> {Math.round(data.main.temp - 273.15)}°
                <span className="mx-1 font-normal">/</span>{Math.round(data.main.temp_max - 273.15)}° 
            </div>
            <p className="dark:text-gray-400">{data.weather[0].description}</p>
        </div>
    </>
  )
}

export default Card