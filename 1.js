//B - Ringo's Favorite Numbers
"use strict";

const main = (lines) => {
  let [D, N] = lines[0].split(" ").map(Number);

  if (N === 100) {
    N = 101;
  }
  console.log(100 ** D * N);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
