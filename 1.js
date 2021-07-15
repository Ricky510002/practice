//A - AtCoder Group Contest
"use strict";

const main = (lines) => {
  let n = Number(lines[0]);
  let a = lines[1].split(" ").map(Number);
  let ans = 0;
  a.sort((a, b) => a - b);

  for (let i = 0; i < n * 3; i++) {
    if (i >= n) {
      if ((i - n) % 2 == 0) ans = ans + parseInt(a[i], 10);
    }
  }

  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
