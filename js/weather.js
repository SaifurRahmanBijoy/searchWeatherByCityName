const API_KEY = `cfe2c2a7ada8dde2458e4da224ac7f8c`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  //   const temperature = document.getElementById("temperature");
  //     temperature.innerText = data.main.temp;
    setInnerTextById('temperature',data.main.temp)
    setInnerTextById('condition',data.weather[0].main)
  console.log(data);
};

const setInnerTextById = (id, text) => {
  const field = document.getElementById(id);
  field.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const seachField = document.getElementById("search-field");
  const city = seachField.value;
  seachField.value = "";
  document.getElementById("city").innerText = city;
  loadTemperature(city);
});
