import { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import fetchWeather from '../../utils/fetchWeather';

const Weather = () => {
  const [code, setCode] = useState('');
  const [units, setUnits] = useState('metric');
  const [data, setData] = useState(null);

  console.log(data);

  return (
    <div className="Weather m-auto">
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather(code, units, setData);
        }}
      >
        <h1 className="text-5xl mb-5">Weather in:</h1>
        <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code}</h1>
        <p>{data && data.weather[0].description}</p>
        <p className="mb-5">Selected Units: {`${units[0].toUpperCase()}${units.slice(1)}`}</p>
        <div className="mb-5">
          <input
            type="text"
            placeholder="ZIP/Postal Code"
            pattern="^([A-Za-z]\d[A-Za-z])|(\d{5})$"
            className="p-2 border border-blue-500 rounded-l"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r"
          >
            Submit
          </button>
        </div>
        <select
          value={units}
          className="mb-3 p-2 border border-blue-500 rounded mr-auto"
          onChange={(e) => setUnits(e.target.value)}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        {['metric', 'imperial', 'standard'].map((val) =>
          <RadioButton
            key={`key-${val}`}
            name="units"
            checked={units === val}
            onChange={() => setUnits(val)}
            label={`${val[0].toUpperCase()}${val.slice(1)}`}
          />
        )}
      </form>
    </div>
  );
};

export default Weather;
