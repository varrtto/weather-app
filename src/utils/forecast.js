const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7386e56540a0dd25fb4c570968f71b81&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const description = body.current.weather_descriptions[0];
      const temperature = body.current.temperature;
      const feelsLike = body.current.feelslike;
      callback(
        undefined,
        description +
          ". It is currently " +
          temperature +
          " degrees out. It feels like " +
          feelsLike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
