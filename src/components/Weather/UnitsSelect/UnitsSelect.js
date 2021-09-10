const UnitsSelect = (props) => {
  const { units, setUnits } = props;

  return (
    <select
      value={units}
      className="mb-3 p-2 border border-blue-500 rounded mr-auto"
      onChange={(e) => setUnits(e.target.value)}
    >
      <option value="metric">Celsius</option>
      <option value="imperial">Fahrenheit</option>
      <option value="standard">Kelvin</option>
    </select>
  );
};

export default UnitsSelect;
