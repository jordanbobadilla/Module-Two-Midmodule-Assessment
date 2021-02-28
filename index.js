const diceRoll = ["⚀","⚁","⚂","⚃","⚄","⚅"]

const input = document.querySelector("input")
const button = document.querySelector("button")
const dice = document.querySelector("#dice-para")
const sum = document.querySelector("#sum-para")
const ul = document.querySelector("ul")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let roll = []
    let sumVal = 0
    sum.textContent = "Sum ="
    for (let i = 0; i < Number(input.value); i++) {
        const randomIndex = Math.floor(Math.random() * diceRoll.length)
        const random = diceRoll[randomIndex]
        roll.push(random)
        sumVal += randomIndex + 1
    }
    dice.textContent = roll.join("")
    sum.textContent += sumVal
    
    
    const li = document.createElement("li")
    input.addEventListener("change", () => {
        li.textContent = `${roll.join("")}=${sumVal}`
        ul.appendChild(li)
    })
})
