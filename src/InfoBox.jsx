import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1780886779114-77ee0846bd3a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLOUDY_URL = "https://images.unsplash.com/photo-1532178910-7815d6919875?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SNOWY_URL = "https://images.unsplash.com/photo-1456441240751-2a368527053f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const THUNDER_URL = "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="info-box">
            <br></br>
            <div className="card-container">
                <Card sx={{ maxWidth: 345, width: "100%" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.description.includes("rain") ? RAINY_URL :
                               info.description.includes("cloud") ? CLOUDY_URL :
                               info.description.includes("snow") ? SNOWY_URL :
                               info.description.includes("thunder") ? THUNDER_URL :
                               info.description.includes("hot") ? HOT_URL :
                               info.temperature > 30 ? HOT_URL :
                               info.temperature < 10 ? COLD_URL :
                               info.humidity > 70 ? RAINY_URL : INIT_URL}
                        title="Weather status"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.description.includes("rain") ? <ThunderstormIcon /> :
                               info.description.includes("cloud") ? <CloudIcon /> :
                               info.description.includes("snow") ? <CloudySnowingIcon /> :
                               info.description.includes("thunder") ? <ThunderstormIcon /> :
                               info.description.includes("hot") ? <SunnyIcon /> :
                               info.temperature > 30 ? <SunnyIcon /> :
                               info.temperature < 10 ? <CloudIcon /> :
                               info.humidity > 70 ? <ThunderstormIcon /> : <SunnyIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            Temperature: {info.temperature}°C
                            <br />
                            Min: {info.temperature_min}°C, Max: {info.temperature_max}°C
                            <br />
                            Description: {info.description}
                            <br />
                            Feels Like: {info.feels_like}°C
                            <br />
                            Humidity: {info.humidity}%
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
