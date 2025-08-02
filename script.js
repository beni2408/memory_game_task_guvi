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
  emoji43.textContent = c;
  emoji33.textContent = a;
  emoji32.textContent = f;
  emoji31.textContent = e;
  emoji21.textContent = b;
  emoji22.textContent = f;
  emoji23.textContent = b;
  emoji13.textContent = c;
  emoji11.textContent = d;
  emoji12.textContent = d;
});
