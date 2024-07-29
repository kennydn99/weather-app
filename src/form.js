import fetchData from "./fetchData";
import display from "./display";

const form = document.querySelector("#location-form");
const search = document.querySelector("#searchbar");
const loadingMessage = document.querySelector(".loading-message");

function setUpForm() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = search.value.trim();
    console.log("User inputed location as: ", location);

    // display loading message
    loadingMessage.style.display = "block";

    try {
      const data = await fetchData.fetchWeatherData(location);
      const myData = fetchData.processData(data);

      display.renderData(myData);
    } catch (error) {
      console.error("There was an error fetching weather data:", error);
    } finally {
      loadingMessage.style.display = "none";
    }
  });
}

export default setUpForm;
