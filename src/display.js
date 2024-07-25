function renderDays(array) {
  const forecastDiv = document.querySelector(".forecast");
  array.forEach((day, index) => {
    const dayItem = document.createElement("div");
    const date = day.datetime;
    const { temp } = day;
    const description = day.conditions;
    dayItem.innerHTML = `Day ${
      index + 1
    } - Date: ${date}, Temperature: ${temp}°F, Description: ${description}`;
    forecastDiv.appendChild(dayItem);
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
    }
    currentWeatherDiv.appendChild(item);
  });
}

export default { renderData };
