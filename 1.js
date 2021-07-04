//A - Fairness
"use strict";

const main = (lines) => {
  let [a, b] = lines[0].split(" ").map(Number);
  let k = Number.parseInt(lines[0].slice(-1));

  if (k % 2 === 0) {
    if (a - b > Math.abs(10 ** 18)) {
      console.log("Unfair");
    } else {
      console.log(a - b);
    }
  } else {
    if (b - a > Math.abs(10 ** 18)) {
      console.log("Unfair");
    } else {
      console.log(b - a);
    }
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
