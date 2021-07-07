//B - Contest with Drinks Easy
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);
  const M = Number(lines[2]);

  for (let i = 0; i < M; i++) {
    let T = lines[1].split(" ").map(Number);
    let line = lines[i + 3].split(" ").map(Number);
    let p = line[0];
    let x = line[1];
    T[p - 1] = x;
    let ans = T.reduce((sum, element) => sum + element, 0);
    console.log(ans);
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
