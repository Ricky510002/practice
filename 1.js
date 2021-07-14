//C - Half and Half
"use strict";

const main = (lines) => {
  let [A, B, C, X, Y] = lines[0].split(" ").map(Number);
  let price1 = A * X + B * Y;
  let price2 = 2 * C * Math.min(X, Y) + Math.abs(X - Y) * (X - Y > 0 ? A : B);
  let price3 = 2 * C * Math.max(X, Y);
  console.log(Math.min(price1, price2, price3));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
