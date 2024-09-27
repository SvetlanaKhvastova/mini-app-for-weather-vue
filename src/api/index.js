import axios from "axios";

const API_KEY = "0b4df61cc05b8d4b2f39b16f2d4612df";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

export function getWeatherData(city) {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
}
