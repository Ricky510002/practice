//A - Counting
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  let cnt = 0;
  for (let i = a; i <= b; i++) {
    cnt++;
  }
  console.log(cnt);
};

main(require("fs").readFileSync("a.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
