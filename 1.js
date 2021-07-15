//C - Build Stairs
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);
  const H = lines[1].split(" ").map(Number);

  let max = 0;
  for (let i = 0; i < N; i++) {
    if (max - H[i] > 1) {
      console.log("No");
      return;
    }
    max = Math.max(max, H[i]);
  }
  console.log("Yes");
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
