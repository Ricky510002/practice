//D - Brick Break
"use strict";

const main = (lines) => {
  let N = Number(lines[0]);
  let a = lines[1].split(" ").map(Number);
  let cnt = 0;

  for (let i = 1; i < N + 1; i++) {
    if (a[i - 1] !== i - cnt) {
      cnt++;
    }
  }
  if (cnt == N) {
    console.log(-1);
  } else {
    console.log(cnt);
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
