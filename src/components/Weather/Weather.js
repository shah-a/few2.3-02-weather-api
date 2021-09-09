import { useState } from 'react';

const Weather = () => {
  const [code, setCode] = useState('');
  const [unit, setUnit] = useState('');

  const units = ['metric', 'imperial', 'standard'];
  const accentColor = { accentColor: '' };

  const radioButtons = units.map((unit) => {
    return (
      <label className="mt-1">
        <input style={accentColor} type="radio" name="unit" className="mr-1" />
        {`${unit[0].toUpperCase()}${unit.slice(1)}`}
      </label>);
  });

  return (
    <div className="Weather m-auto">
      <form className="flex flex-col">
        <h1 className="text-5xl mb-5">Weather in:</h1>
        <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code}</h1>
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
          style={accentColor}
          className="mb-3 p-2 border border-blue-500 rounded mr-auto"
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        {radioButtons}
      </form>
    </div>
  );
};

export default Weather;
