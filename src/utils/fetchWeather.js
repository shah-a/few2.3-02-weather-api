const fetchWeather = async (code, units, setData) => {
  code = new RegExp(/([a-z]\d[a-z])/i).test(code) ? `${code},ca` : code;

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const urlQuery = `?zip=${code}&units=${units}`;

  const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/weather`;
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ urlBase, urlQuery });

  let data = await fetch(fetchUrl, { method, headers, body });
  data = await data.json();

  // If the status code begins with anything other than 2, then
  // `setData(null)`. Otherwise, `setData(data)`.
  data.cod.toString()[0] !== '2' ? setData(null) : setData({
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description
  });
}

const fetchWeatherGeo = async (units, setData) => {
  await new Promise((res) => setTimeout(res, 1500));
};

export { fetchWeather, fetchWeatherGeo };
