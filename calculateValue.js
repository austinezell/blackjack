let calculateValue = (cards) => {
  let sum = 0;
  let values = cards.map( card =>{
    let value = 0;
    if (typeof card.number === 'number'){
      value = card.number
    } else if (card.number === "A"){
      if (sum <= 21){
        value = 11;
      }else {
        value = 1;
      }
    }else {
      value = 10;
    }
    return value;
  }
);
sum = values.reduce(( a , b ) => ( a + b));
return sum
}


export default calculateValue
