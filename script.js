let button = document.getElementById("button");
let img = document.getElementById("bulb");
let buttonCondication = "on";

button.addEventListener("click", () => {
  if (buttonCondication === "on") {
    button.innerText = "OFF";
    img.src = "https://i.postimg.cc/sg28KT3v/bulb1.png";
    buttonCondication = "off";
  } else {
    button.innerText = "ON";
    img.src = "https://i.postimg.cc/Dy6Hq9k9/bulb.png";
    buttonCondication = "on";
  }
});
