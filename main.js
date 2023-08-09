const buttons = document.querySelectorAll('.score-btn')
const buttonContainer = document.getElementById('buttons-container')
const submitButton = document.querySelector('.submit-btn')
const screenOne = document.getElementById('screen-one')
const screenTwo = document.getElementById('screen-two')
const feedBackScore = document.getElementById('feedback-score')

let score = 0

buttonContainer.addEventListener('click', (e)=>{
    for (let button of buttons) {
        if (button === e.target) {
            score = Number(e.target.textContent)
            feedBackScore.textContent =  `You selected ${score} out of 5`  
            button.classList.add('selected')
        } else {
            button.classList.remove('selected')
        }
    }
})

submitButton.addEventListener('click', ()=>{
    if (score !== 0) {
    screenOne.style.display = 'none'
    screenTwo.style.display = 'grid'
    }
})

