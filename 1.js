//C - Low Elements  / 
"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  const p = lines[1].split(" ").map(Number);
  let min = p[0];
  let cnt = 1;
  for (let i = 1; i <= n; i++) {
    min = Math.min(min, p[i]);
    if (min == p[i]) {
      cnt++;
    }
  }
  console.log(cnt);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
