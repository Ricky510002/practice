//C - Candies
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);
  const a1 = lines[1].split(" ").map(Number);
  const a2 = lines[2].split(" ").map(Number);

  let ans = 0;
  for (let i = 0; i < N; i++) {
    const upper = a1.slice(0, i + 1).reduce((p, c) => p + c);
    const lower = a2.slice(i).reduce((p, c) => p + c);

    ans = Math.max(ans, upper + lower);
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
