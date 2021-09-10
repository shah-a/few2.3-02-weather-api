const DataDisplay = (props) => {
  const { code, units, data } = props;

  if (data) {
    return (
      <div className="DataDisplay">
        <h1 className="text-5xl mb-3 w-full text-blue-500 font-bold">{code.toUpperCase()}</h1>
        <p>Temp: {data.temp}</p>
        <p>Feels like: {data.feelsLike}</p>
        <p>Description: {data.description}</p>
        <p className="mb-5">Selected Units: {`${units[0].toUpperCase()}${units.slice(1)}`}</p>
      </div>
    );
  }

  return (
    <div className="DataDisplay">
      <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code.toUpperCase() || "Enter a code:"}</h1>
    </div>
  );
};

export default DataDisplay;
