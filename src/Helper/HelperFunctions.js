// Count the scores of the player
export const CardCount = (Cards) => {
  let count = 0;

  // Move aces to the back
  Cards = moveAcesToBack(Cards);

  Cards.forEach((card) => {
    // Split the card type and suit and take the type
    card = card.split("-")[0];

    if (
      card === "Jack" ||
      card === "Queen" ||
      card === "King" ||
      card === "Ten"
    ) {
      count += 10;
    } else if (card === "Ace") {
      if (count + 11 > 21) {
        count += 1;
      } else {
        count += 11;
      }
    } else {
      count += stringToNumber(card);
    }
  });

  return count;
};

// This shit is fkn dumb
const stringToNumber = (str) => {
  if (str === "Two") {
    return 2;
  } else if (str === "Three") {
    return 3;
  } else if (str === "Four") {
    return 4;
  } else if (str === "Five") {
    return 5;
  } else if (str === "Six") {
    return 6;
  } else if (str === "Seven") {
    return 7;
  } else if (str === "Eight") {
    return 8;
  } else if (str === "Nine") {
    return 9;
  }
};

const moveAcesToBack = (Cards) => {
  for (let i = 0; i < Cards.length; i++) {
    if (Cards[i].split("-")[0] === "Ace") {
      Cards.push(Cards.splice(i, 1)[0]);
    }
  }

  return Cards;
};
