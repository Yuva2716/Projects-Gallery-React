import { useRef, useState } from "react";
import React from 'react';
import './Weather.css';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom'


const Weather = () => {
    const input = useRef();
    const [weather, setWeather] = useState(null);
    

    const report = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.current.value}&appid=fbb50edff6f4bb9ba498298f8b781c0e&units=metric`)
            .then(result => result.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    };

    return (
        <>
            <h1><Link className="Home-icon fs-1" to={'/Home'}><MdHome /></Link></h1>
            <div className='W-APP h-100'>                
                <h1 className="heading text-dark fw-bold fs-2">Weather Report</h1>
                <div className="container w-100 mt-3 ">
                    <input ref={input} className='inp-city p-2' type="text" placeholder='Enter City Name' required />                    
                    <br />
                    <input onClick={report} className='pt-2 pb-2 pl-4 pr-4 mt-4 rounded btn' type="button" value="Get Weather" />
                    {
                        weather ?
                            <div className="result mt-3">
                                {/* <h5> <span>Region&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.name}, {weather.sys.country}</h5>
                                <h5> <span>Weather &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.weather[0].description}</h5>
                                <h5> <span>Temp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.main.temp} °C</h5>
                                <h5> <span>Min-Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.main.temp_min} °C</h5>
                                <h5> <span>Max-Temp &nbsp;&nbsp;&nbsp;:</span> {weather.main.temp_max} °C</h5>
                                <h5> <span>Wind Speed &nbsp;:</span> {weather.wind.speed} </h5> */}
                                <table className="table">
                                     <tr>
                                        <td className="text-start w-50" scope="col">Region</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.name}, {weather.sys.country}</td>                                        
                                    </tr>
                                    <tr>
                                        <td className="text-start" scope="col">Weather</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.weather[0].description}</td>                                        
                                    </tr>
                                    <tr>
                                        <td className="text-start" scope="col">Temp</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.main.temp} °C</td>                                        
                                    </tr>
                                    <tr>
                                        <td className="text-start" scope="col">Min-Temp</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.main.temp_min} °C</td>                                        
                                    </tr>
                                    <tr>
                                        <td className="text-start" scope="col">Max-Temp</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.main.temp_max} °C</td>                                        
                                    </tr>
                                    <tr>
                                        <td className="text-start" scope="col">Wind Speed</td>
                                        <td className="colan" scope="col">:</td>
                                        <td className="data" scope="col">{weather.wind.speed} m/s</td>                                        
                                    </tr> 
                                </table>

                            </div>
                            : ""
                    }
                </div>
            </div>
        </>
    );
};

export default Weather