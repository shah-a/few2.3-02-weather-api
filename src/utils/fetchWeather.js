const fetchWeather = async (code, units, setData) => {
  code = new RegExp(/([a-z]\d[a-z])/i).test(code) ? `${code},ca` : code;

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const urlQuery = `?zip=${code}&units=${units}`;

  const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/weather`;
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ urlBase, urlQuery });

  await fetch(fetchUrl, { method, headers, body })
    .then((data) => data.json())
    .then((data) => {
      // If the status code begins with anything other than 2, then
      // `setData(null)`. Otherwise, `setData(data)`.
      data.cod.toString()[0] !== '2' ? setData(null) : setData({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description
      });
    })
    .catch(() => alert('Error! Something went wrong.'));
}

const fetchWeatherGeo = async (units, setData) => {
  const geoPromise = new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  });

  const pos = await geoPromise.catch(() => alert('Error! Try checking your location permissions.'));

  if (!pos) return setData(null);

  const { latitude, longitude } = pos.coords;
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const urlQuery = `?lat=${latitude}&lon=${longitude}&units=${units}`;

  const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/weather`;
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ urlBase, urlQuery });

  await fetch(fetchUrl, { method, headers, body })
    .then((data) => data.json())
    .then((data) => {
      // If the status code begins with anything other than 2, then
      // `setData(null)`. Otherwise, `setData(data)`.
      data.cod.toString()[0] !== '2' ? setData(null) : setData({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description
      });
    })
    .catch(() => alert('Error! Something went wrong.'));
};

export { fetchWeather, fetchWeatherGeo };
