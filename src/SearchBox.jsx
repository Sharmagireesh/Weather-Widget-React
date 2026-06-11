import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { API_URL, API_KEY } from './config';

export default function SearchBox({ updateInfo, onError }) {
    let [city, setcity] = useState("");
    
    let weatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                onError("No such city exists in our API. Please try another city.");
                return;
            }
            let jsonResponse = await response.json();
            console.log("🌤️ Weather Data for " + city);
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                temperature: jsonResponse.main.temp,
                temperature_min: jsonResponse.main.temp_min,
                temperature_max: jsonResponse.main.temp_max,
                description: jsonResponse.weather[0].description,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
            };
            console.log(result);
            updateInfo(result);
        } catch (error) {
            onError("Error fetching weather data. Please try again.");
            console.error("Error:", error);
        }
    };
    
    let handleChange = (event) => {
        setcity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        if (city.trim()) {
            console.log(`Searching for: ${city}`);
            await weatherinfo();
        }
        setcity("");
    };
    
    return (
        <div className="search-box"> 
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
