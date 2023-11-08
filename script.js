const apiKey = '20d0b74210e3ef793c0b63567f587492';

window.onload = function() {
  submitString();
};

function submitString() {
  const inputString = document.getElementById('inputString').value;
  const altitude = 5000;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputString}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      let barometricPressure = parseFloat(data.main.pressure) * 0.75006 - 0.025*altitude;
      
      barometricPressure = parseInt(barometricPressure);
      document.getElementById('barometric_output').innerText = barometricPressure;
    })
    .catch(error => {
      console.error(error);
    });
}