console.log(tarotData);
function selectCard() {
  // random number bettwen 0 and list.length
  const randomResult = Math.floor(Math.random() * tarotData.length);
  // get the random card from the list
  const randomCard = tarotData[randomResult];
  console.log(randomCard);
  // modify html with the new image of the card
  // get an element by id
  var element = document.getElementById("cardPlaceholder");

  // cleans the inside of the component
  element.innerHTML = "";

  // adds the element to the html node
  const before = `<img
  class="card-image"
  src="${randomCard.img}"
  />`;
  element.insertAdjacentHTML("beforeend", before);
  // modify html with a new text (meaning of the card)
  // get an element by id
  var element2 = document.getElementById("captionPlaceholder");

  // cleans the inside of the component
  element2.innerHTML = "";

  // adds the element to the html node
  const before2 = `<h3>Meaning:</h3><h4>${randomCard.upright}</h4>`;
  element2.insertAdjacentHTML("beforeend", before2);
}
