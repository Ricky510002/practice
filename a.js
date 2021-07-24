//Blood Pressure
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  const c =  (a - b) / 3 + b
  console.log(c);
};

main(require("fs").readFileSync("a.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
