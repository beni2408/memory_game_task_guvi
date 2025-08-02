function shuffle(val1, val2, val3, val4, val5, val6) {
  const shuffledvalues = [val1, val2, val3, val4, val5, val6].sort(
    () => Math.random() - 0.5
  );
  return shuffledvalues;
}

// const val = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");

// console.log(val);

// code

const initialval = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");

const [a, b, c, d, e, f] = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");
console.log(a, b, c, d, e, f);
const emoji41 = document.getElementById("emoji41");
// emoji41.classList.add("hidden");
const emoji42 = document.getElementById("emoji42");
// emoji42.classList.add("hidden");

const emoji43 = document.getElementById("emoji43");
// emoji43.classList.add("hidden");

const emoj13 = document.getElementById("emoji13");
// emoji13.classList.add("hidden");

const emoj12 = document.getElementById("emoji12");
// emoji12.classList.add("hidden");

const emoji11 = document.getElementById("emoji11");
// emoji11.classList.add("hidden");

const emoji21 = document.getElementById("emoji21");
// emoji21.classList.add("hidden");

const emoji22 = document.getElementById("emoji22");
// emoji22.classList.add("hidden");

const emoji23 = document.getElementById("emoji23");
// emoji23.classList.add("hidden");

const emoji31 = document.getElementById("emoji31");
// emoji31.classList.add("hidden");

const emoji32 = document.getElementById("emoji32");
// emoji32.classList.add("hidden");

const emoji33 = document.getElementById("emoji33");
// emoji33.classList.add("hidden");

emoji41.textContent = a;
emoji42.textContent = e;
emoji43.textContent = f;
emoji33.textContent = a;
emoji32.textContent = c;
emoji31.textContent = e;
emoji21.textContent = b;
emoji22.textContent = f;
emoji23.textContent = d;
emoji13.textContent = c;
emoji11.textContent = b;
emoji12.textContent = d;
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

flip(card1);
flip(card2);
flip(card3);
flip(card4);
flip(card5);
flip(card6);
flip(card7);
flip(card8);
flip(card9);
flip(card10);
flip(card11);
flip(card12);

let flippedCards = [];

// const card = document.getElementsByClassName("card");
// card.addEventListener("click", () => {
//   flip(card1);
// });

// let flippedCards = [];

async function flip(cardElement) {
  cardElement.addEventListener("click", async function handleClick() {
    // Prevent clicking the same card twice
    if (flippedCards.includes(cardElement)) return;

    // Flip logic (e.g., show emoji)
    cardElement.classList.add("flipped");

    flippedCards.push(cardElement);

    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      // Compare contents
      if (firstCard.textContent === secondCard.textContent) {
        console.log("Matched:", firstCard.textContent);
        // firstCard.style.display = "none";
        // secondCard.style.display = "none";

        // Disable further clicks
        firstCard.removeEventListener("click", handleClick);
        secondCard.removeEventListener("click", handleClick);
      } else {
        console.log("Not a match");

        // Wait a bit before resetting
        await new Promise((resolve) => setTimeout(resolve, 1000));
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
      }

      // Reset for next round
      flippedCards = [];
    }
  });
}

const refreshBTN = document.getElementById("restart-btn");
refreshBTN.addEventListener("click", () => {
  //   const newShuffle = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");
  //   console.log(newShuffle);
  const [a, b, c, d, e, f] = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");
  console.log(a, b, c, d, e, f);
  const emoji41 = document.getElementById("emoji41");
  const emoji42 = document.getElementById("emoji42");
  const emoji43 = document.getElementById("emoji43");
  const emoji21 = document.getElementById("emoji21");
  const emoji22 = document.getElementById("emoji22");
  const emoji23 = document.getElementById("emoji23");
  const emoji31 = document.getElementById("emoji31");
  const emoji32 = document.getElementById("emoji32");
  const emoji33 = document.getElementById("emoji33");

  emoji41.textContent = a;
  emoji42.textContent = e;
  emoji43.textContent = f;
  emoji33.textContent = a;
  emoji32.textContent = c;
  emoji31.textContent = e;
  emoji21.textContent = b;
  emoji22.textContent = f;
  emoji23.textContent = d;
  emoji13.textContent = c;
  emoji11.textContent = b;
  emoji12.textContent = d;
});
