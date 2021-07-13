//B - Exponential
"use strict";

const main = (lines) => {
  let x = Number(lines[0]);
  let ans = 1;
  for (let i = 1; i <= x; i++) {
    for (let j = 2; j <= x; j++) {
      let t = Math.pow(i, j);
      if (t <= x) {
        ans = Math.max(ans, t);
      }
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
