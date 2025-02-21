const counter = document.getElementById('score');
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
const addFive = document.getElementById('plus5')
const minusFive = document.getElementById('minus5')
let score = 0;

plus.addEventListener('click', () => {
    score++
    console.log(score)
    counter.textContent = score
})

addFive.addEventListener('click', () => {
    score = score + 5
    counter.textContent = score
})

minus.addEventListener('click', () => {
    if(score >= 1){
        score--
        counter.textContent = score
    }
})

minusFive.addEventListener('click', () => {
    if(score >= 5){
        score = score - 5
        counter.textContent = score
    }
})


