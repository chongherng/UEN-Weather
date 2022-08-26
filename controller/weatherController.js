const weatherCache = require("../cache");

const getWeather = (location) => {
    const foundItem = weatherCache.get("weatherData").find((item) => {
      return item.area === location;
    });
    return foundItem;
}

const getLocation = () => {
  const locations = weatherCache.get("weatherData").map((item) => {
    return item.area;
  })
  return locations;
}

module.exports = {
    getWeather,
    getLocation
}