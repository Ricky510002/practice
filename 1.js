//C - Tax Increase
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  for (let i = 1; i <= 1000; i++) {
    if (Math.floor(i * 0.08) === a && Math.floor(i * 0.1) === b) {
      console.log(i);
      return;
    }
  }
  console.log(-1);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
