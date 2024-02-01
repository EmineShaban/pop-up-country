let changeCountry = document.getElementById("change-country");
let country = document.getElementsByClassName("country-img");
let country1 = document.getElementById("country1");
let country2 = document.getElementById("country2");

changeCountry.addEventListener("click", function (e) {
  e.preventDefault();
  country1.style.visibility = "hidden";
  country2.style.visibility = "visible";
});

const buttonPressed = (e) => {
  e.preventDefault();
  console.log(e.target.parentElement.className);
  if (e.target.parentElement.className == "country-img") {
    e.target.parentElement.className += " border";
  } else {
    e.target.parentElement.className = "country-img";
  }
};

for (let index = 0; index < country.length; index++) {
  country[index].addEventListener("click", buttonPressed);
}
