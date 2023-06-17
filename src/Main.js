import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudShowersWater } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from "react";
import { useState } from "react";
function Main() {

    const[endpoint, setEndpoint] = useState("")
    const[endpoint1, setEndpoint1] = useState("")

    const[city, setCity] = useState("manila")
    const[timezone, SetTimeZone] = useState("")
    const[items, setItems] = useState([])
    const[latitude, setLatitude] = useState("")
    const[longitude, setLongitude] = useState("")
    const[temperature, setTemperature] = useState("7")
    const[humidity, setHumidity] = useState("0")
    const[ws, setWs] = useState("0")


    useEffect(()=>{
        fetchMe()
    }, [endpoint])

    const fetchMe = () =>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f7d741fea0msh39121422a9e84dep10d5e6jsna02f3ff93e9a',
            'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
        }
     }
    fetch(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${endpoint}/hourly/`,options)
    .then(response=>{
        return response.json()
    })
    .then(data=>{setItems(data)
    
    });
    }
     
    const valueSetter1 = (e) =>{
        setEndpoint1(e.target.value)
    }

    const valueSetter = () =>{
        setEndpoint(endpoint1)
        console.log(items)
        setCity(items.location.name)
        SetTimeZone(items.forecast.forecastDate)
        setLatitude(items.location.coordinates.latitude)
        setLongitude(items.location.coordinates.longitude)
        setTemperature(items.forecast.items[0].temperature.avg)
        setHumidity(items.forecast.items[0].relativeHumidity)
        setWs(items.forecast.items[0].wind.avg)
    }

    return (

        <div class="bg-zinc-900 h-screen flex">
            <div class="bg-gradient-to-r rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg w-4/12 h-3/4 m-auto from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <div class="flex jusify-center items-center mt-11 ml-12">
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={valueSetter1} placeholder="Enter a City" required />
                    <button type="submit" class="text-white bg-blue-700 ml-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={valueSetter}>Search</button>
                </div>
                <div class="block justify-center text-center mt-10">
                    <p class="text-white text-9xl ">{temperature}°c</p>
                    <p class="text-white text-5xl font-extrabold">{city}</p>
                    <p class="text-white text-1xl">Timezone: {timezone}</p>
                    <p class="text-white text-1xl">Coordinates: ({latitude},{longitude})</p>
                </div>
                <div class="grid grid-flow-col gap-2 mt-14">
                    <div class="flex justify-center">
                        <FontAwesomeIcon icon={faCloudShowersWater} class="text-white h-10"></FontAwesomeIcon>
                        <div>
                            <p class="text-white text-xl">{humidity}%</p>
                            <p class="text-white text-lg">Humidity</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <FontAwesomeIcon icon={faWind} class="text-white h-10"></FontAwesomeIcon>
                        <div>
                            <p class="text-white text-xl">{ws} km/h</p>
                            <p class="text-white text-lg">Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main