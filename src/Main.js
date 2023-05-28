import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudShowersWater } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import React from "react";

function Main() {

    return (
        <div class="bg-zinc-900 h-screen flex">
            <div class="bg-gradient-to-r rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg w-4/12 h-3/4 m-auto from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <div class="flex jusify-center items-center mt-11 ml-12">
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a City" required />
                    <button type="submit" class="text-white bg-blue-700 ml-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                <div class="block justify-center text-center mt-16">
                    <p class="text-white text-9xl ">7°c</p>
                    <p class="text-white text-5xl font-extrabold">New york</p>
                </div>
                <div class="grid grid-flow-col gap-2 mt-14">
                    <div class="flex justify-center">
                        <FontAwesomeIcon icon={faCloudShowersWater} class="text-white h-10"></FontAwesomeIcon>
                        <div>
                            <p class="text-white text-xl">48%</p>
                            <p class="text-white text-lg">Humidity</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <FontAwesomeIcon icon={faWind} class="text-white h-10"></FontAwesomeIcon>
                        <div>
                            <p class="text-white text-xl">10.29 km/h</p>
                            <p class="text-white text-lg">Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main