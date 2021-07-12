//C - 100 to 105
"use strict";

const main = (lines) => {
  let x = Number(lines[0]);
  let y = x % 100;
  let z = Math.floor(x / 100);

  if (z * 5 < y) {
    console.log("0");
  } else {
    console.log("1");
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
