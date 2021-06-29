// D - Caracal vs Monster

"use strict";

const main = (lines) => {
  const h = Number(lines[0]);

  const solve = (n) => {
    if(n <= 0) return 0;
    if(n === 1) return n;
    if(n === 2) return 3;

    return solve(Math.floor(n/2)) * 2 + 1
  }

  console.log(solve(Math.floor(h/2) * 2 + 1));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
