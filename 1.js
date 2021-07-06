//C - Maximal Value
"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  const b = lines[1].split(" ").map(Number);
  let a = [];
  a[0] = b[0];
  a[n - 1] = b[n - 2];

  for (let i = 1; i < n - 1; i++) {
    a[i] = Math.min(b[i - 1], b[i]);
  }
  a = a.reduce((x, y) => x + y);
  console.log(a);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
