const express = require("express");
const router = express.Router();
const path = require("path");
const validationController = require("../controller/validationController");
const weatherController = require("../controller/weatherController");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/view/index.html"));
});

router.post("/validateFormat", async (req, res) => {
  const validationResult = await validationController.validateFormat(
    req.body.UEN
  );
  res.json({ validationResult: validationResult });
});

router.post("/weather", (req, res) => {
  const weather = weatherController.getWeather(req.body.location);
  weather
    ? res.json({ weather: weather.forecast })
    : res.json({ weather: "Invalid Location" });
});

router.get("/locations", (req, res) => {
  const locations = weatherController.getLocation();
  res.json({ locations: locations });
});

module.exports = router;
