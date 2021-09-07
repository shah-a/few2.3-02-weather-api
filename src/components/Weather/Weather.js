import { useState } from 'react';

const Weather = () => {
  const [code, setCode] = useState('');

  return (
    <div className="Weather h-full m-auto">
      <h1 className="text-4xl mt-5 text-blue-500">
        Weather component
      </h1>
      <div className="input">
        <input
          type="text"
          placeholder="ZIP/Postal Code"
          className="border-2 rounded-l-md"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Weather;
