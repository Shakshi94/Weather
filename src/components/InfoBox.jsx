import { Typography, Box, Grid } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import PropTypes from 'prop-types';

export default function Infobox({ info }) {
  const getBackgroundColor = () => {
    if (info.temp > 30) {
      return '#FF5733';
    } else if (info.temp >= 15) {
      return '#56CCF2';
    } else {
      return '#A3D8F4';
    }
  };

  return (
    <Box
      sx={{
        padding: '2rem',
        backgroundColor: getBackgroundColor(),
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
        transition: 'background-color 0.5s ease',
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'black' }}>
        Weather Info - {info.city}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="black">
            Temperature: {info.temp}°C
          </Typography>
          <Typography variant="body1" color="black">
            Feels like: {info.feel_likes}°C
          </Typography>
          <Typography variant="body1" color="black">
            Humidity: {info.humidity}%
          </Typography>
          <Typography variant="body1" color="black">
            Min Temp: {info.temp_min}°C
          </Typography>
          <Typography variant="body1" color="black">
            Max Temp: {info.temp_max}°C
          </Typography>
          <Typography variant="body1" color="black">
            Weather: <i><b>{info.weather}</b></i>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {(info.humidity > 80) ? (
              <ThunderstormIcon sx={{ fontSize: 60, color: 'white' }} />
            ) : (info.temp > 15) ? (
              <WbSunnyIcon sx={{ fontSize: 60, color: 'yellow' }} />
            ) : (
              <AcUnitIcon sx={{ fontSize: 60, color: 'white' }} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Infobox.propTypes = {
  info: PropTypes.object.isRequired,
};
