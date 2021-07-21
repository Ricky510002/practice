//C - City Savers
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);
  const a = lines[1].split(" ").map(Number);
  const b = lines[2].split(" ").map(Number);

  let count = 0;
  for (let i = 0; i < b.length; i++) {
    let x = Math.min(a[i], b[i]);
    b[i] -= x;
    let x2 = Math.min(a[i + 1], b[i]);
    a[i + 1] -= x2;
    count += x + x2;
  }
  console.log(count);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
