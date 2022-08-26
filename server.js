const express = require("express");
const app = express();
const axios = require("axios").default;
const weatherCache = require("./cache");
const cron = require("node-cron");
const bodyParser = require("body-parser");

const weatherUrl =
  "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";

const getWeatherData = async () => {
  try {
    const res = await axios.get(weatherUrl);
    weatherCache.set("weatherData", res.data.items[0].forecasts);
  } catch (err) {
    console.error(err);
  }
};

getWeatherData();

const home = require("./router/home");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", home);

app.listen(3000, () => console.log("Server listening on port 5000"));

cron.schedule("0,30 * * * *", async () => {
  try {
    weatherCache.flushAll();
    const res = await axios.get(weatherUrl);
    weatherCache.set("weatherData", res.data.items[0].forecasts);
  } catch (err) {
    console.error(err);
  }
});
