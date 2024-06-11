import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import PropTypes from 'prop-types';
import './infoBox.css'

export default function Infobox({info}){
     let hotUrl = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
     let coldUrl = "https://media.istockphoto.com/id/1064083590/photo/winter-scene-snowfall-in-the-woods.jpg?s=1024x1024&w=is&k=20&c=2TlFRxLXJ9HRLPKH2K9RDKWzpyTJAobuYyuUeiL0D2o=";
     let rainUrl = "https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.jpg?s=1024x1024&w=is&k=20&c=rzo08tkhBeLcTUXmk4HL3U5QuS0pIIklNWTM0t-dbv4=";
    return(
        <>
         <h2>WeatherInfo - {info.weather}</h2>
         <div className="card">
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
                sx={{ height: 140 }}
                image= {(info.humidity >80) ? rainUrl :(info.temp >15)? hotUrl : coldUrl} 
                title="green iguana"
            />
         <CardContent>
                <Typography gutterBottom variant="h5" component="div"> 
                 {info.city}<span style={{marginLeft:"9rem"}}>{(info.humidity>80)? <ThunderstormIcon/>:(info.temp>15) ?<WbSunnyIcon/>:<AcUnitIcon/> }</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <p>Temp = {info.temp}&deg;</p>
                 <p>Minimum Temp = {info.temp_min}&deg;C</p>
                 <p>Maximum Temp = {info.temp_max}&deg;C</p>
                 <p>Humidity = {info.humidity}&deg;C</p>
                 <p>The weather is described as <i><b>{info.weather}</b></i> & feels like {info.feel_likes}&deg;C </p>
                </Typography>
          </CardContent>
         </Card>
         </div>
        </>
    )
}

Infobox.propTypes = {
  info: PropTypes.string.isRequired
}