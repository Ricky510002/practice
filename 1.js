//C - Walk on Multiplication Table
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);

  let min = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      min.push(i - 1 + (N / i - 1));
    }
  }

  console.log(Math.min(...min));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
