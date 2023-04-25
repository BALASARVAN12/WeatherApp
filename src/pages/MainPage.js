import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Vectors from '../components/Vectors.js';


function MainPage(){


    const api = {
        key: "0d2b66cb894822ffb44a9297827e8b85",
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
                            </div>

                        ) : (
                            <div>
                                <p className='text-2 text-center'>24<sup>o</sup>C</p>
                                <p className='text-3 text-center'>Visakhapatnam</p>
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