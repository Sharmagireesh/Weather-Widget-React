import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Shimla",
        temperature: 25,
        temperature_min: 20,
        temperature_max: 30,
        description: "Clear sky",
        feels_like: 27,
        humidity: 60,
    });

    let [errorMessage, setErrorMessage] = useState("");

    let updateInfo = (result) => {
        setWeatherInfo(result);
        setErrorMessage("");
    };

    let handleError = (error) => {
        setErrorMessage(error);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Weather App</h1>
            <SearchBox updateInfo={updateInfo} onError={handleError} />
            <InfoBox info={weatherInfo} error={errorMessage} />
        </div>
    );
}
