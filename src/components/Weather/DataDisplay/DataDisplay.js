const DataDisplay = (props) => {
  const { code, data } = props;

  if (data) {
    return (
      <div className="DataDisplay mb-3">
        <h1 className="text-5xl mb-3 w-full text-blue-500 font-bold">{code.toUpperCase()}</h1>
        <p>Temp: {data.temp}</p>
        <p>Feels like: {data.feelsLike}</p>
        <p>Description: {data.description}</p>
      </div>
    );
  }

  return (
    <div className="DataDisplay mb-3">
      <h1 className="text-5xl mb-7 w-full text-blue-500 font-bold">{code.toUpperCase() || "Enter a code:"}</h1>
      <p>no data</p>
    </div>
  );
};

export default DataDisplay;
