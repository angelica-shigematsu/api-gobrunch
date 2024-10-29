const quantCard = document.getElementsByName('quantCard')[0].value;
const input = document.querySelector("input");

window.addEventListener("keydown", () => {
  document.getElementsByClassName("section-right")[0].innerHTML += card()
 
})

const card = () => {
  for( let i = 1; i < quantCard.length; i++) {
    `<article class="article-content">
    <p class="article-number">${i}</p>
  </article>`
  }
}