function shuffle(...vals) {
  return vals.sort(() => Math.random() - 0.5);
}

let emojiElements = Array.from(document.querySelectorAll(".emoji"));
let allCards = Array.from(document.querySelectorAll(".card"));
let flippedCards = [];

function assignEmojis() {
  const [a, b, c, d, e, f] = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");
  const emojiValues = [a, b, c, b, f, d, e, c, a, e, f, d];

  emojiElements.forEach((el, index) => {
    el.textContent = emojiValues[index];
    el.style.visibility = "hidden";
    el.style.textDecoration = "none";
  });

  allCards.forEach((card) => {
    card.classList.remove("flipped", "matched");
  });

  flippedCards = [];
}

function handleCardClick(e) {
  const card = e.currentTarget;

  if (card.classList.contains("matched") || flippedCards.includes(card)) {
    return;
  }

  const emoji = card.querySelector(".emoji");
  emoji.style.visibility = "visible";
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;
    const firstEmoji = first.querySelector(".emoji");
    const secondEmoji = second.querySelector(".emoji");

    if (firstEmoji.textContent === secondEmoji.textContent) {
      first.classList.add("matched");
      second.classList.add("matched");
      firstEmoji.style.textDecoration = "line-through";
      secondEmoji.style.textDecoration = "line-through";
    } else {
      setTimeout(() => {
        firstEmoji.style.visibility = "hidden";
        secondEmoji.style.visibility = "hidden";
        first.classList.remove("flipped");
        second.classList.remove("flipped");
      }, 1000);
    }

    flippedCards = [];
  }
}

function setupGame() {
  assignEmojis();

  // Reset event listeners
  allCards.forEach((card) => {
    const newCard = card.cloneNode(true);
    card.replaceWith(newCard);
  });

  allCards = Array.from(document.querySelectorAll(".card"));
  emojiElements = Array.from(document.querySelectorAll(".emoji"));

  allCards.forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupGame();

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    setupGame();
  });
});
