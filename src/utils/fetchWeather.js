const fetchWeather = async (code, units, setData) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  code = new RegExp(/([a-z]\d[a-z])/i).test(code) ? `${code},ca` : code;

  const urlBase = process.env.REACT_APP_URL_BASE;
  const urlQuery = `?zip=${code}&appid=${apiKey}&${units}`

  const res = await fetch(urlBase + urlQuery);
  const data = await res.json();

  data.cod === "404" ? setData(null) : setData(data);
}

export default fetchWeather;
