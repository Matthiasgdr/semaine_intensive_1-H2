window.onscroll = function() {buildFunction()};
function buildFunction(){
  let guidon = document.getElementById('guidon')
  let selle = document.getElementById('selle')
  let roueArriere = document.getElementById('roue_arriere')
  let roueAvant = document.getElementById('roue_avant')
  let cadre = document.getElementById('cadre')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    guidon.style.left="584.5px"
    guidon.style.top="168px"
    selle.style.left="304px"
    selle.style.top="227px"
    roueArriere.style.left="110px"
    roueArriere.style.top="346px"
    roueAvant.style.left="573.5px"
    roueAvant.style.top="302px"
    cadre.style.left="350px"
    cadre.style.top="250px"
    firstP.style.left="770px"
    firstP.style.top="80px"
    secondP.style.left="770px"
    secondP.style.top="80px"
    thirdP.style.left="770px"
    thirdP.style.top="80px"
    fourthP.style.left="770px"
    fourthP.style.top="80px"
    fifthP.style.left="770px"
    fifthP.style.top="80px"
  }
  else {
    guidon.style.left="200px"
    guidon.style.top="450px"
    selle.style.left="280px"
    selle.style.top="100px"
    roueArriere.style.left="650px"
    roueArriere.style.top="20px"
    roueAvant.style.left="20px"
    roueAvant.style.top="130px"
    cadre.style.left="600px"
    cadre.style.top="300px"
    firstP.style.left="830px"
    firstP.style.top="460px"
    secondP.style.left="326px"
    secondP.style.top="274px"
    thirdP.style.left="316px"
    thirdP.style.top="340px"
    fourthP.style.left="420.5px"
    fourthP.style.top="21px"
    fifthP.style.left="880px"
    fifthP.style.top="320px"
  }
}
