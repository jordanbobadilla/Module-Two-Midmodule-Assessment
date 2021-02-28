const diceRoll = ["⚀","⚁","⚂","⚃","⚄","⚅"]

const input = document.querySelector("input")
const button = document.querySelector("button")
const dice = document.querySelector("#dice-para")
const sum = document.querySelector("#sum-para")
const ul = document.querySelector("ul")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    sum.textContent = "Sum ="
    let roll = []
    let sumVal = 0
    for (let i = 0; i < Number(input.value); i++) {
        const randomIndex = Math.floor(Math.random() * diceRoll.length)
        const random = diceRoll[randomIndex]
        roll.push(random)
        sumVal += randomIndex + 1
    }
    dice.textContent = roll.join("")
    sum.textContent += sumVal

    button.addEventListener("click", (e) => {
        if (e.detail > 1) {
            const li = document.createElement("li")
            li.textContent = roll.join("")
            ul.appendChild(li)
        }
    })
})
