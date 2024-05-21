const cards = document.querySelectorAll(".card")

let firstCard = undefined
let secondCard = undefined


const onCardsClick = function (e) {
  console.log(e);
  console.log(this);
  if (!firstCard)
    firstCard = this.querySelector("img")
  else
    secondCard = this.querySelector("img")

  if (firstCard && secondCard)
    if (firstCard.src == secondCard.src) {
      console.log("match");
      firstCard.parentNode.removeEventListener("click", onCardsClick)
      secondCard.parentNode.removeEventListener("click", onCardsClick)
    }
    else {
      setTimeout((arg) => {
        firstCard.parentNode.classList.toggle("flip")
        secondCard.parentNode.classList.toggle("flip")
      }, 1000)
      console.log(" no match");
    }

  this.classList.toggle("flip")
}

cards.forEach((arg) => {
  arg.addEventListener("click", onCardsClick)
})
