//
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  let x = a * 6;
  if (b <= x && b !== 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
