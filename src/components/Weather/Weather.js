import { useState } from 'react';
import DataDisplay from './DataDisplay/DataDisplay';
import CodeInput from './CodeInput/CodeInput';
import UnitsSelect from './UnitsSelect/UnitsSelect';
import UnitsRadio from './UnitsRadio/UnitsRadio';
import Spinner from './Spinner/Spinner';
import { fetchWeather, fetchWeatherGeo } from '../../utils/fetchWeather';

const Weather = () => {
  const [code, setCode] = useState('');
  const [units, setUnits] = useState('metric');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingGeo, setLoadingGeo] = useState(false);

  return (
    <div className="Weather text-gray-700 sm:text-lg max-w-md mx-auto space-y-4 divide-y-2">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          await fetchWeather(code, units, setData);
          setLoading(false);
        }}
      >
        <DataDisplay code={code} units={units} data={data} />
        <CodeInput code={code} setCode={setCode} loading={loading} />
        <UnitsSelect units={units} setUnits={setUnits} />
        {['metric', 'imperial', 'standard'].map((val) =>
          <UnitsRadio
            key={`key-${val}`}
            name="units"
            checked={units === val}
            onChange={() => setUnits(val)}
            label={`${val[0].toUpperCase()}${val.slice(1)}`}
          />
        )}
      </form>
      <form
        className="flex flex-col items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoadingGeo(true);
          await fetchWeatherGeo(units, setData);
          setLoadingGeo(false);
        }}
      >
        {loadingGeo ? (
          <button disabled className="mt-4 p-2 text-white bg-teal-600 border rounded-lg">
            <Spinner />Loading
          </button>
        ) : (
          <button type="submit" className="mt-4 p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-lg">
            Use Current Location
          </button>
        )}
      </form>
    </div>
  );
};

export default Weather;
