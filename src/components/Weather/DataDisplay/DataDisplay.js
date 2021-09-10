const DataDisplay = (props) => {
  const { code, units, data } = props;

  return (
    <div className="DataDisplay">
      <h1 className="text-5xl mb-5">Weather in:</h1>
      <h1 className="text-5xl mb-10 w-full text-blue-500 font-bold">{code}</h1>
      <p>{data && data.weather[0].description}</p>
      <p className="mb-5">Selected Units: {`${units[0].toUpperCase()}${units.slice(1)}`}</p>
    </div>
  );
};

export default DataDisplay;
