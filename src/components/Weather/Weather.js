import { useState } from 'react';
import DataDisplay from './DataDisplay/DataDisplay';
import CodeInput from './CodeInput/CodeInput';
import UnitsSelect from './UnitsSelect/UnitsSelect';
import UnitsRadio from './UnitsRadio/UnitsRadio';
import fetchWeather from '../../utils/fetchWeather';

const Weather = () => {
  const [code, setCode] = useState('');
  const [units, setUnits] = useState('metric');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="Weather text-gray-700 sm:text-lg max-w-md mx-auto">
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
    </div>
  );
};

export default Weather;
