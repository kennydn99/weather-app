import getIcon from "./icons";

const tempUnit = document.querySelector("#temp-unit");

function convertTemp(value, unit) {
  if (unit === "celsius") {
    return ((value - 32) * 5) / 9;
  }
  return value;
}

function renderDays(array, unit) {
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "";

  array.forEach((day, index) => {
    if (index > 0) {
      const dayItem = document.createElement("div");
      const date = day.datetime;
      const temp = convertTemp(day.temp, unit).toFixed(1);
      const description = day.conditions;
      const hi = convertTemp(day.tempmax, unit).toFixed(1);
      const lo = convertTemp(day.tempmin, unit).toFixed(1);

      dayItem.innerHTML = `
      <div class='day'>
      <div class='date'>${date}</div>
      <div class='day-temp'>${temp}°${
        tempUnit.value === "celsius" ? "C" : "F"
      }</div>
      <div class='descrip'>${description}</div>
      <div class='hi-lo'>H:${hi}°${
        tempUnit.value === "celsius" ? "C" : "F"
      } L:${lo}°${tempUnit.value === "celsius" ? "C" : "F"}</div>
      </div>`;
      forecastDiv.appendChild(dayItem);
    }
  });
}

function renderData(myData, unit) {
  const currentWeatherDiv = document.querySelector(".current-weather");
  currentWeatherDiv.innerHTML = "";

  // image element for icon
  const icon = document.createElement("img");
  icon.classList.add("weather-icon");
  icon.src = getIcon(myData.conditions);

  Object.entries(myData).forEach(([key, value]) => {
    const item = document.createElement("div");

    if (key === "days") {
      renderDays(value, unit);
    } else {
      if (key === "temp" || key === "feelslike") {
        const convertedValue = convertTemp(value, tempUnit.value).toFixed(1);
        item.innerHTML = `${key}: ${convertedValue}°${
          tempUnit.value === "celsius" ? "C" : "F"
        }`;
      } else {
        item.innerHTML = `${value}`;
      }
      item.classList.add(`${key}`);
    }
    currentWeatherDiv.appendChild(item);
  });

  currentWeatherDiv.appendChild(icon);
  currentWeatherDiv.style.display = "flex";
}

export default { renderData };
