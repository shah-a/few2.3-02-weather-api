const DataDisplay = (props) => {
  const { code, data } = props;

  if (data) {
    return (
      <div className="DataDisplay mb-3">
        <h1 className="text-5xl mb-3 text-blue-500 font-bold">{code.toUpperCase() || "Enter code:"}</h1>
        <p>Temp: <strong>{data.temp}</strong></p>
        <p>Feels like: <strong>{data.feelsLike}</strong></p>
        <p>Description: <strong>{data.description}</strong></p>
      </div>
    );
  }

  return (
    <div className="DataDisplay mb-3">
      <h1 className="text-5xl mb-3 text-blue-500 font-bold">{code.toUpperCase() || "Enter code:"}</h1>
      <p>Temp: <strong>N/A</strong></p>
      <p>Feels like: <strong>N/A</strong></p>
      <p>Description: <strong>N/A</strong></p>
    </div>
  );
};

export default DataDisplay;
