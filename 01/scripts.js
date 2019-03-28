// let data = "Hello My Dear Potato"
// let searchQuery = "potato"
// let searchResults = data.toLowerCase().includes(searchQuery)
// console.log(searchResults)

let $cards = document.querySelectorAll('.card')
let $input = document.querySelector('input')
$input.onkeyup = filterCards

function filterCards(event) {
  let searchQuery = event.target.value.toLowerCase()
  $cards.forEach(function compareWithSearchQuery($card) {
    let cardHeading = $card
                           .querySelector('h2')
                           .innerText
                           .toLowerCase()
    if (cardHeading.includes(searchQuery)) {
      $card.style.display = 'block'
    } else {
      $card.style.display = 'none'
    }
  })
}
