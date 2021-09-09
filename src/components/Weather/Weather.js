import { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';

const Weather = () => {
  const [code, setCode] = useState('');
  const [unit, setUnit] = useState('metric');

  return (
    <div className="Weather m-auto">
      <form className="flex flex-col">
        <h1 className="text-5xl mb-5">Weather in:</h1>
        <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code}</h1>
        <p className="mb-5">Units: {`${unit[0].toUpperCase()}${unit.slice(1)}`}</p>
        <div className="mb-5">
          <input
            type="text"
            placeholder="ZIP/Postal Code"
            className="p-2 border border-blue-500 rounded-l"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r">Submit</button>
        </div>
        <select
          value={unit}
          className="mb-3 p-2 border border-blue-500 rounded mr-auto"
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        {['metric', 'imperial', 'standard'].map((val) =>
          <RadioButton
            name="unit"
            checked={unit === val}
            onChange={() => setUnit(val)}
            label={`${val[0].toUpperCase()}${val.slice(1)}`}
          />
        )}
      </form>
    </div>
  );
};

export default Weather;
