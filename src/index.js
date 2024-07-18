import "./styles.css";

function fetchWeatherData(location) {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const API_KEY = "X9BRD9SNZFM8Z2ZH7TBJRMR56";
  const url = `${baseURL}${location}?key=${API_KEY}`;

  const request = new Request(url, { mode: "cors" });
  return (
    fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("response: ", response);
        return response.json();
      })
      // .then((data) => {
      //   console.log("data", data);
      // })
      .catch((error) => console.log("Fetch error: ", error))
  );
}

function processData(data) {
  return {
    resolvedAddress: data.resolvedAddress,
    temp: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    feelslike: data.currentConditions.feelslike,
    days: data.days.slice(0, 7),
  };
}

fetchWeatherData("Arizona").then((data) => {
  console.log("data: ", data);
  const myData = processData(data);
  console.log("myData: ", myData);
});
