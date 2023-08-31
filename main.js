const homeScore= document.getElementById('home-score')
const guestScore= document.getElementById('guest-score')

let homeCount=0
let guestCount=0

document.addEventListener('click',({target:{dataset:{home,guest},id}})=>{
  home  &&  incrementScore('home',home)
  guest &&  incrementScore('guest',guest)
  id=='reset-score' &&  resetScore()

})

const incrementScore=(team,amount)=>{

    team==='home'   &&  (homeCount += Number(amount))
    team==='guest'  &&  (guestCount+= Number(amount))

    renderScores()

}


const checkLeader=()=>{
  homeScore.classList.remove('leader')
  guestScore.classList.remove('leader')
  
  homeCount>guestCount &&homeScore.classList.add('leader')
  guestCount>homeCount && guestScore.classList.add('leader')
}

const resetScore=()=>{
  guestCount=0
  homeCount=0
  renderScores()
}

const renderScores=()=>{
  guestScore.innerHTML=guestCount
  homeScore.innerHTML=homeCount
  checkLeader()
}