 function toggleText() {
     if (document.getElementById("reason-text00").style.display == "") {
         console.log('ffff')
         document.getElementById("reason-text00").style.display = "block"
         document.getElementById("reason-text0").style.display = 'none'
     }
 }


 function toggleText1() {
    if (document.getElementById("reason-text11").style.display == "") {
        console.log('ffff')
        document.getElementById("reason-text11").style.display = "block"
        document.getElementById("reason-text1").style.display = 'none'
    }
}
function toggleText2() {
    if (document.getElementById("reason-text22").style.display == "") {
        console.log('ffff')
        document.getElementById("reason-text22").style.display = "block"
        document.getElementById("reason-text2").style.display = 'none'
    }
}
function toggleText3() {
    if (document.getElementById("reason-text33").style.display == "") {
        console.log('ffff')
        document.getElementById("reason-text33").style.display = "block"
        document.getElementById("reason-text3").style.display = 'none'
    }
}
function toggleText4() {
    if (document.getElementById("reason-text44").style.display == "") {
        console.log('ffff')
        document.getElementById("reason-text44").style.display = "block"
        document.getElementById("reason-text4").style.display = 'none'
    }
}
function toggleText5() {
    if (document.getElementById("reason-text55").style.display == "") {
        console.log('ffff')
        document.getElementById("reason-text55").style.display = "block"
        document.getElementById("reason-text5").style.display = 'none'
    }
}










let firstImg = document.getElementById('Тop Dermatological Substances')
let secondImg = document.getElementById('Powerful Natural Ingredients')
let thirdImg = document.getElementById('Exclusive Natural Oils')
 
let firstText = document.getElementById('ingredients-text11')
let secondText = document.getElementById('ingredients-text22')
let thirdText = document.getElementById('ingredients-text33')
 
let firstH3 = document.getElementById('h3-1')
let secondH3 = document.getElementById('h3-2')
let thirdH3 = document.getElementById('h3-3')
 
let firstP = document.getElementById('p-1')
let secondP = document.getElementById('p-2')
let thirdP = document.getElementById('p-3')
 



function onClick1() {

    firstText.style.display = 'block'
    secondText.style.display = 'none'
    thirdText.style.display = 'none'
 
    // firstH3.className += ' selected-p'
    // firstP.className += ' new-p'

    secondImg.className = firstImg.className.replace(" selected-p", " no-selected-p");
    thirdImg.className = thirdImg.className.replace(" selected-p", " no-selected-p");
     firstImg.className = firstImg.className.replace(" no-selected-p", " selected-p");
}



function onClick2() {
    firstText.style.display = 'none'
    secondText.style.display = 'block'
    thirdText.style.display = 'none'
 
    // secondH3.className += ' selected-p'
    // secondP.className += ' new-p'

    firstImg.className = firstImg.className.replace(" selected-p", " no-selected-p");
    thirdImg.className = thirdImg.className.replace(" selected-p", " no-selected-p");

    secondImg.className = secondImg.className.replace(" no-selected-p", " selected-p");

}

function onClick3() {
    firstText.style.display = 'none'
    secondText.style.display = 'none'
    thirdText.style.display = 'block'
 
    // thirdH3.className += ' selected-p'
    // thirdP.className += ' new-p'

    firstImg.className = firstImg.className.replace(" selected-p", " no-selected-p");
    secondImg.className = thirdImg.className.replace(" selected-p", " no-selected-p");
      thirdImg.className = thirdImg.className.replace(" no-selected-p", " selected-p");

}

 