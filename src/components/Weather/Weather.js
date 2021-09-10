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

  return (
    <div className="Weather"> {/* m-auto p-7 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather(code, units, setData);
        }}
      >
        <DataDisplay code={code} units={units} data={data} />
        <CodeInput code={code} setCode={setCode} />
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
