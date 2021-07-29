//C - To Infinity
"use strict";

const main = (lines) => {
  let N = Number(lines[0]);
  let A = lines[1].split(" ").map(Number);

 
  const ans = A.reduce((a, c) => {
    return a + (c - 1);
  }, 0);

  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
