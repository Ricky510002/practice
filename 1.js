//C - Christmas Eve
"use strict";

const main = (lines) => {
  const [N, K] = lines[0].split(" ").map(Number);
  lines.shift();
  const sorted = lines.sort((a, b) => a - b);

  let min = 10000000000;
  for (let i = 0; i <= N - K; i++) {
    if (min > sorted[i + K - 1] - sorted[i]) {
      min = sorted[i + K - 1] - sorted[i];
    }
  }

  console.log(min);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
