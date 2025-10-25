async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "95fe2cbf2d86526edd22e3bfe5da3f6e"; // 🔑 Replace with your own API key from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherResult.innerHTML = "City not found 😢";
      return;
    }

    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const name = data.name;

    weatherResult.innerHTML = `
      <h3>${name}</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>🌈 Condition: ${desc}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = "Error fetching data!";
  }
}
