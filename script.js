function shuffle(val1, val2, val3, val4, val5, val6) {
  const shuffledvalues = [val1, val2, val3, val4, val5, val6].sort(
    () => Math.random() - 0.5
  );
  return shuffledvalues;
}

const val = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");

console.log(val);

// code

const refreshBTN = document.getElementById("restart-btn");
refreshBTN.addEventListener("click", () => {
  const newShuffle = shuffle("❤️", "🎶", "✨", "🌟", "🎈", "🔥");
  console.log(newShuffle);
});
