import React,{useState} from 'react'
import { fetchApi } from '../components/api'
import Card from '../components/Card';

function Search() {
    const [city,setCity] = useState("");
    const [data,setData] = useState();
    const [error,setError] = useState("");
    async function search(){
        const weather = await fetchApi(city,setError);
        if (weather === "City Not Found!"){
            setData()
            setError(weather)
        }else {
            setData(weather)
            setError("")
        }
    }
  return (
    <div className=''>
        <nav className='flex justify-between items-center p-4 w-screen h-16 bg-[#2e3239] shadow-md'>
            <h1 className='text-xl font-bold text-white'>☁ Weather App</h1>
            <a href='https://github.com/sanjay2334/weather-app-react' target='_blank' className='container flex justify-center items-center text-md font-semibold text-white bg-[#272a30] w-28 h-9 rounded-md hover:bg-[#1a1d22]'><img src='icons/github.png' className='w-5 h-5 mr-1' alt='gitlogo'/>Git Repo</a>
        </nav>
        <div className='h-[80vh] flex flex-col justify-center items-center'>
            <div className="relative"> 
                <div className="absolute top-4 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
                <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="City name here" name="city" onChange={e=>setCity(e.target.value)}/>
                <div className="absolute top-2 right-2">
                    <button className="h-10 w-20 text-white rounded-lg bg-[#2e3239] hover:bg-[#282b30]" onClick={()=>search()}>Search</button>
                </div>
            </div>
            {error && <div className='mt-6 text-white text-xl font-bold'>{error}</div>}
            {data && <div className='mt-10'><Card data={data} /></div>}
        </div>
    </div>
  )
}

export default Search