function shuffle(val1, val2, val3, val4, val5, val6) {
  const shuffledvalues = [val1, val2, val3, val4, val5, val6].sort(
    () => Math.random() - 0.5
  );
  console.log(shuffledvalues);
}

shuffle(1, 2, 3, 4, 5, 6);
