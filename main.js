import $ from "jquery";
import _ from "lodash";
import cards from "./cards.js"
import calculateValue from "./calculateValue.js"
// import addCardToHand from "./addCardToHand.js"
// require("./style.css");
let shuffledCards = _.shuffle(cards)

let init = () =>{
  let $hit = $('#hit')
  let $deal = $('#deal') ;

  let playerVal = 0
  let dealerVal = 0
  let playerCards = []
  let dealerCards = []
  let gameStart = () => {
    $deal.addClass('hidden');
    addPlayerCard()
    addDealerCard()
    addPlayerCard()
    addDealerCard()
    dealerVal = calculateValue(playerCards)
    console.log(playerCards);
    console.log(calculateValue(playerCards));
  }

  let hit = () =>{
    console.log("working");
    addPlayerCard()
    playerVal = calculateValue(playerCards)
    console.log(playerVal);
  }


  let addPlayerCard = () =>{
    playerCards.push(shuffledCards[0]);
    shuffledCards =_.drop(shuffledCards)
  }
  let addDealerCard = () =>{
    dealerCards.push(shuffledCards[0]);
    shuffledCards =_.drop(shuffledCards)
  }



  $hit.click(hit)
  $deal.click(gameStart);
}
$(document).ready(init);
