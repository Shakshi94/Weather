import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

function Search({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17cfd029542bd50cbfbeabb885eae254&units=metric`;

    let getWeatherInfo = async () => {
        setLoading(true);
        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            let result = {
                city: responseJson.name,
                humidity: responseJson.main.humidity,
                temp: responseJson.main.temp,
                temp_min: responseJson.main.temp_min,
                temp_max: responseJson.main.temp_max,
                feel_likes: responseJson.main.feels_like,
                weather: responseJson.weather[0].description,
            };
            setLoading(false);
            return result;
        } catch (error) {
            setError(true);
            setLoading(false);
            error.message = "No such place in our API";
            throw error;
        }
    };

    let handleInputChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            navigate(`${city}`);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <Box className="search_Box" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
                <Typography variant="h3" sx={{ textAlign: "center", color: "black", marginBottom: 3 }}>
                    Weather Updater
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Search City"
                        variant="outlined"
                        value={city}
                        onChange={handleInputChange}
                        sx={{
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '& fieldset': {
                                    borderColor: 'black',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            marginLeft: "1rem",
                            marginBottom: "1rem",
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
                    </Button>
                    {error && (
                        <Typography variant="body1" sx={{ color: '#95d6ea', fontWeight: 'bold', textAlign: 'center', fontSize: '1rem' }}>
                            No such place exists!
                        </Typography>
                    )}
                </form>
            </Box>
        </div>
    );
}

Search.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};


export default Search;