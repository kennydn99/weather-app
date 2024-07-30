import fetchData from "./fetchData";
import display from "./display";

const form = document.querySelector("#location-form");
const search = document.querySelector("#searchbar");
const loadingMessage = document.querySelector(".loading-message");
const tempUnit = document.querySelector("#temp-unit");

let currentData = null;

function setUpForm() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = search.value.trim();
    console.log("User inputed location as: ", location);

    // display loading message
    loadingMessage.style.display = "block";

    try {
      const data = await fetchData.fetchWeatherData(location);
      currentData = fetchData.processData(data);

      display.renderData(currentData);
    } catch (error) {
      console.error("There was an error fetching weather data:", error);
    } finally {
      loadingMessage.style.display = "none";
    }
  });

  tempUnit.addEventListener("change", () => {
    if (currentData) {
      display.renderData(currentData, tempUnit.value);
    }
  });
}

export default setUpForm;
