import { useState } from 'react';

const Weather = () => {
  const [code, setCode] = useState('');

  return (
    <div className="Weather m-auto">
      <form>
        <h1 className="text-5xl">Weather in:</h1>
        <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code}</h1>
        <input
          type="text"
          placeholder="ZIP/Postal Code"
          className="p-2 border border-blue-500 rounded-l"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r">Submit</button>
      </form>
    </div>
  );
};

export default Weather;
