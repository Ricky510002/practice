//A - Range Product
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  if (0 < a && a <= b) {
    console.log("Positive");
  } else if (a <= 0 && 0 <= b) {
    console.log("Zero");
  } else if (a <= b && b < 0) {
    if ((b - a + 1) % 2 === 0) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
