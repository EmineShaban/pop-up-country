 


let changeCountry = document.getElementById('change-country')
let country1 = document.getElementById('country1')
let country2 = document.getElementById('country2')

changeCountry.addEventListener("click", function (e) {
 e.preventDefault()
    country1.style.visibility = 'hidden';
    country2.style.visibility = 'visible';

});