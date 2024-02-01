let changeCountry = document.getElementById("change-country");
let country = document.getElementsByClassName("country-i");
let country1 = document.getElementById("country1");
let country2 = document.getElementById("country2");

changeCountry.addEventListener("click", function (e) {
  e.preventDefault();
  country1.style.visibility = "hidden";
  country2.style.visibility = "visible";
});

const buttonPressed = (e) => {
  e.preventDefault();
  if (e.target.parentElement.children[0].className == "country-i") {
    for (let index = 0; index < country.length; index++) {
      country[index].className = "country-i";
      country[index].parentElement.parentElement.children[1].className = "";
    }
    e.target.parentElement.parentElement.children[1].className = " bold";
    e.target.parentElement.children[0].className += " border";
  } else {
    e.target.parentElement.parentElement.children[1].className = "";
    e.target.parentElement.children[0].className = "country-i";
  }
};

for (let index = 0; index < country.length; index++) {
  country[index].addEventListener("click", buttonPressed);
}
