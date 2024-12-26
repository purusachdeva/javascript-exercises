const convertToCelsius = function(tempInFarenheight) {
  let tempInCelcius = (tempInFarenheight - 32) * (5/9)
  return Math.round(tempInCelcius * 10) / 10
};

const convertToFahrenheit = function(tempInCelcius) {
  let tempInFarenheight = (9/5) * tempInCelcius + 32
  return Math.round(tempInFarenheight * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
