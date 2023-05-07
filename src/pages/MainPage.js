import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Vectors from '../components/Vectors.js';


function MainPage(){


    const api = {
        key: "f4ef3475a69b7fcded53cdcbe6f3b5a2",
        base: "https://api.openweathermap.org/data/2.5/" 
    }


   const [city, setCity] = useState(""); 
   const [weather, setWeather] = useState({});
   const [submitting, setSubmitting] = useState(false);

   const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);
    setTimeout(() => {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((result) => result.json())
        .then((w) => {setWeather(w);})
        setSubmitting(false);
      }, 2300);

  }


    return(
        <div className='root-body'>
            <div className='main-body'>

                <div className='rectangles'>
                    <div className="rectangle-1 bg-white rounded-3">
                        <p className='text-1 text-center'>The Weather App</p>
                        
                        {typeof weather.main!=="undefined" ? (
                            <div>
                                <p className='text-2 text-center'>{Math.round(weather.main.temp)}<sup>o</sup>C</p>
                                <p className='text-3 text-center'>{weather.name}</p>
                                <h5 className='text-4 text-center'>{weather.weather[0].description}<img src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} /></h5>
                                <h5 className='text-5 text-center'>Humidity: {weather.main.humidity}&nbsp;&nbsp; Pressure: {weather.main.pressure}</h5>
                            </div>

                        ) : (
                            <div>
                                <p className='text-2 text-center'><sup>o</sup>C</p>
                                <p className='text-3 text-center'>Location</p>
                            </div>
                        )
                        }
                    </div>
                    {
                        submitting &&
                        <div className='loading bg-white rounded-3'>
                            <img src="../vectors/loadspinner.gif"></img>
                        </div>

                    }
                    <div className="rectangle-2 bg-white rounded-3">
                        <form name="weather-input">
                            <input  className="city-input rounded-3" type="text" name="city" placeholder="Enter city" onChange={(e) => setCity(e.target.value)}></input>
                            <button className="input-button rounded-3 text-white" onClick={handleSubmit}>Get Weather</button>
                        </form>
                </div>
                </div>

                <Vectors />
                
            </div>  
        </div>
    )
}

export default MainPage;
