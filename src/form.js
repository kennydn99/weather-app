import fetchData from "./fetchData";
import display from "./display";

const form = document.querySelector("#location-form");
const search = document.querySelector("#searchbar");

function setUpForm() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value.trim();
    console.log("User inputed location as: ", location);
    fetchData.fetchWeatherData(location).then((data) => {
      console.log("all data: ", data);
      const myData = fetchData.processData(data);
      console.log("myData: ", myData);

      display.renderData(myData);
    });
  });
}

export default setUpForm;
