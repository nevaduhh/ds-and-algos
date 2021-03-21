/*
  The Frugal Gentleman
  Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

  Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

  Examples
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ]) ➞ "Wine 9"

  chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

  chosenWine([]) ➞ null
  Notes
  All wines will be different prices, so there is no confusion in the ordering.
*/

// gross approach
const chosenWine = (wines = []) => {
  if (!wines.length) return null;
  if (wines.length === 1) return wines[0];

  let cheapestWine;
  let secondCheapest;

  wines.forEach(wine => {
    if (!cheapestWine) {
      cheapestWine = wine;

      return;
    }

    if (!secondCheapest) {
      if (wine.price < cheapestWine.price) {
        secondCheapest = cheapestWine;
        cheapestWine = wine;

        return;
      } else {
        secondCheapest = wine;

        return;
      }
    }

    if (wine.price < cheapestWine.price) {
      secondCheapest = cheapestWine;
      cheapestWine = wine;
    } else if (wine.price < secondCheapest.price) {
      secondCheapest = wine;
    }
  });

  return secondCheapest.name;
}

const result = chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
])

console.log(result)

// clean approach
const chosenWine = (wines) => {
	if (wines.length === 0) return null
	if (wines.length === 1) return wines[0].name

	return wines.sort((a,b) => a.price - b.price)[1].name
}