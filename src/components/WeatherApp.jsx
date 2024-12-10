import Infobox from "./InfoBox";
import PropTypes from 'prop-types';

export default function WeatherApp({ weatherInfo }) {
  return (
    <Infobox info={weatherInfo} />
  );
}

WeatherApp.propTypes = {
  weatherInfo: PropTypes.object.isRequired
};
