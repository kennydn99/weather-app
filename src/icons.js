import sun from "./images/sun.png";
import rain from "./images/rain.png";
import partyCloudy from "./images/partly-cloudy.png";
import cloud from "./images/cloudy.png";
import snowy from "./images/snow.png";

const iconMap = {
  Cloudy: cloud,
  Clear: sun,
  PartlyCloudy: partyCloudy,
  Rain: rain,
  Snow: snowy,
};

function getIcon(condition) {
  if (condition.toLowerCase().includes("rain")) {
    return iconMap.Rain;
  }
  if (condition.toLowerCase().includes("partially cloudy")) {
    return iconMap.PartlyCloudy;
  }
  if (condition.toLowerCase().includes("overcast")) {
    return iconMap.Cloudy;
  }
  if (condition.toLowerCase().includes("snow")) {
    return iconMap.snowy;
  }
  return iconMap.Clear;
}

export default getIcon;
