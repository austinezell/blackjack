
let suits = ['spades', 'hearts', 'diamonds', 'clubs'];
let numbers = ['A', 2, 3, 4, 5, 6 ,7, 8, 9, 10, 'J', 'Q', 'K'];

var cards = []
for (var i = 0; i < suits.length; i++){
  for (var j = 0; j < numbers.length; j++){
    let ob = {'suit': suits[i], 'number': numbers[j]};
    cards.push(ob);
  }
}


export default cards;
