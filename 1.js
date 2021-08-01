//C - Multiple Gift
"use strict";

const main = (lines) => {
  let [x, y] = lines[0].split(" ").map(BigInt);
  
  let cnt = 0n;
  while (x <= y) {
    x *= 2n;
    cnt += 1n;
  }
  console.log(Number(cnt));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
