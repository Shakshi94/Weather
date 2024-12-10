import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import WeatherApp from './components/WeatherApp';
import { useState } from 'react';
import './App.css';
import Sunny from '/public/images/sunny.png';
import Rainy from '/public/images/rainy.png';
import Snowy from '/public/images/snowy.png';

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feel_likes: "",
    humidity: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    weather: "",
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <div className="image1" style={{ position: 'absolute', top: '30%', left: '10%', opacity: '0.7',
      '@media (min-width: 768px)': {
          opacity: 0,
        }, }}>
        <img src={Sunny} alt="Sunny Weather" style={{ width: "150px", margin: "10px" }} />
      </div>
      <div className="image2" style={{ position: 'absolute', top: '0%', left: '25%', opacity: '0.7' }}>
        <img src={Rainy} alt="Rainy Weather" style={{ width: "150px", margin: "10px" }} />
      </div>
      <div className="image3" style={{ position: 'absolute', bottom: '0%', left: '60%', opacity: '0.7' }}>
        <img src={Snowy} alt="Snowy Weather" style={{ width: "150px", margin: "10px" }} />
      </div>
      <div className="image4" style={{ position: 'absolute', top: '30%', right: '10%', opacity: '0.7' }}>
        <img src={Sunny} alt="Sunny Weather" style={{ width: "150px", margin: "10px" }} />
      </div>
      <div className="image5" style={{ position: 'absolute', top: '0%', right: '20%', opacity: '0.7' }}>
        <img src={Rainy} alt="Rainy Weather" style={{ width: "150px", margin: "10px" }} />
      </div>
      <div className="image6" style={{ position: 'absolute', bottom: '0%', left: '30%', opacity: '0.7' }}>
        <img src={Snowy} alt="Snowy Weather" style={{ width: "150px", margin: "10px" }} />
      </div>

      <div style={{
        backgroundColor: "#528ab4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '5rem',
        padding: "2rem",
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search updateInfo={updateInfo} />} />
            <Route path="/:cityname" element={<WeatherApp weatherInfo={weatherInfo} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
