console.log(tarotData);
function selectCard() {
  // random number bettwen 0 and list.length
  const randomResult = Math.floor(Math.random() * tarotData.length);
  // get the random card from the list
  const randomCard = tarotData[randomResult];
  console.log(randomCard);
  //modify html with the new image of the card
  // modify html with a new image for the text (meaning of the card)

  window.alert("olá");
}
