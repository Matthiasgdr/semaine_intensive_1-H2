window.onscroll = function() {buildFunction()};
function buildFunction(){
  let guidon = document.getElementById('guidon')
  let selle = document.getElementById('selle')
  let roueArriere = document.getElementById('roue_arriere')
  let roueAvant = document.getElementById('roue_avant')
  let cadre = document.getElementById('cadre')
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    //assembled position
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
    firstP.style.top="120px"
    secondP.style.left="770px"
    secondP.style.top="120px"
    thirdP.style.left="770px"
    thirdP.style.top="120px"
    fourthP.style.left="770px"
    fourthP.style.top="120px"
    fifthP.style.left="770px"
    fifthP.style.top="120px"
  }
  else {
    //dissassembled position
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


//slider fonction
function activeDot() {
  let iconeActive = this.getAttribute('id')
  let oldIcon = document.querySelector('.description img')
  let onfocusClass = document.getElementsByClassName('onfocus')
  onfocusClass[0].classList.remove('onfocus')
  this.classList.add('onfocus')
  oldIcon.setAttribute('src', `images/${iconeActive}.png`)
  let h1 = ['DIY CUSTOM BUILD','UNLIMITED UPGRADES', '40 KM/H TOP SPEED', 'CARBON FIBER FRAME', '350 MID-DRIVE MOTOR', 'CUSTOMIZABLE SETTINGS', '']
  let activeH1 = document.querySelector('h1')
  activeH1.innerHTML = `${h1[iconeActive - 1]}`
  let paragraph = ['The Sterka M1 is a high performance kit with custom features and modular adaptability.','You are free to choose all the settings. Then you will have a totally personalized E-bike.', 'Thanks to high-level engineering the Sterka M1 is able to reach really speed which makes it one of the fastest electronic bike.','Sterka Concept cares about using components of the highest quality. Carbon fiber enables better speed and lower weight.', 'the Sterka M1 uses this one powerful motor which insures a suffisant confort for the rider while climbing hills and optimizes energy saving.', ' The Sterka M1 is meant to become yours that’s why it is entirely customizable in order to perfectly fit your lifestyle needs.']
  let activeParagraphe = document.querySelector('.message p')
  activeParagraphe.innerHTML = `${paragraph[iconeActive - 1]}`
}
function slider(){
  let icone = document.querySelectorAll('.sliderDot')
  for(let i = 0; i < icone.length ; i++){
    icone[i].addEventListener('click', activeDot, false)
  }
}
slider()
//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})







/*
function autoSlide(){
  let move = setInterval(
    function(){
      let i = 1
      i++
      let onfocusClass = document.getElementsByClassName('onfocus')
      onfocusClass[0].classList.remove('onfocus')
      let test = document.getElementById(`${i}`)
      test.classList.add('onfocus')
      let testImg = document.querySelector('.description img')
      testImg.setAttribute('src', `images/${i}.png`)
      console.log("i = ", i)
    }, 4000
  )
}
autoSlide()
*/
