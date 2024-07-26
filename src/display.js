function renderDays(array) {
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "";

  array.forEach((day, index) => {
    if (index > 0) {
      const dayItem = document.createElement("div");
      const date = day.datetime;
      const { temp } = day;
      const description = day.conditions;
      const hi = day.tempmax;
      const lo = day.tempmin;
      dayItem.innerHTML = `
      <div class='day'>
      <div class='date'>${date}</div>
      <div class='day-temp'>${temp}°F</div>
      <div class='descrip'>${description}</div>
      <div class='hi-lo'>H:${hi} L:${lo}</div>
      </div>`;
      forecastDiv.appendChild(dayItem);
    }
  });
}

function renderData(myData) {
  const currentWeatherDiv = document.querySelector(".current-weather");
  currentWeatherDiv.innerHTML = "";

  Object.entries(myData).forEach(([key, value]) => {
    const item = document.createElement("div");

    if (key === "days") {
      renderDays(value);
    } else {
      item.innerHTML = `${key}: ${value}`;
      item.classList.add(`${key}`);
    }
    currentWeatherDiv.appendChild(item);
  });
}

export default { renderData };
