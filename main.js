const buttons = document.querySelectorAll('.score-btn')
const buttonContainer = document.getElementById('buttons-container')
const submitButton = document.querySelector('.submit-btn')



const screenOne = document.getElementById('screen-one')
const screenTwo = document.getElementById('screen-two')
const feedBackScore = document.getElementById('feedback-score')

buttonContainer.addEventListener('click', (e)=>{
    for (let button of buttons) {
        if (button === e.target) {
            feedBackScore.innerHTML = Number(e.target.textContent)
            button.classList.add('selected')
        } else {
            button.classList.remove('selected')
        }
    }
})

submitButton.addEventListener('click', ()=>{
    screenOne.style.display = 'none'
    screenTwo.style.display = 'flex'
})

