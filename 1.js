//B - Two Colors Card Game
"use strict";

const main = (lines) => {
  const N = parseInt(lines[0]);
  const cards = {};
  for (let i = 0; i < N; i++) {
    const card = lines[i + 1];
    if (card in cards) {
      //あればプラス１
      cards[card]++;
    } else {
      cards[card] = 1;
    }
  }

  const M = parseInt(lines[N + 1]);
  for (let i = 0; i < M; i++) {
    const card = lines[i + N + 2];
    if (card in cards) {
      cards[card]--;
    } else {
      cards[card] = -1;
    }
  }

  const max = Object.keys(cards).reduce((prev, current) =>
    cards[prev] > cards[current] ? prev : current
  );
  console.log(Math.max(cards[max], 0));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
