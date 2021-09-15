const fetchWeather = async (code, units, setData) => {
  code = new RegExp(/([a-z]\d[a-z])/i).test(code) ? `${code},ca` : code;

  const urlBase = process.env.REACT_APP_URL_BASE;
  const urlQuery = `?code=${code}&units=${units}`;

  let data = await fetch(urlBase + urlQuery);
  data = await data.json();

  // If the status code begins with anything other than 2, then
  // `setData(null)`. Otherwise, `setData(data)`.
  data.cod.toString()[0] !== "2" ? setData(null) : setData({
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description
  });
}

export default fetchWeather;
