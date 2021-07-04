//B - Lucas Number
"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  const arr = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(BigInt(2, 10));
    } else if (i === 1) {
      arr.push(BigInt(1, 10));
    } else {
      arr.push(BigInt(arr[i - 2], 10) + BigInt(arr[i - 1], 10));
    }
  }
  console.log(arr[n].toString());
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
