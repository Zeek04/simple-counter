const counter = document.getElementById('score');
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
let score = 0;

plus.addEventListener('click', () => {
    score++
    console.log(score)
    counter.textContent = score
})

minus.addEventListener('click', () => {
    score--
    counter.textContent = score
})


