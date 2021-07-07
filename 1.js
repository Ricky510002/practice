//B - Palace
"use strict";

const main = (lines) => {
  const N = Number(lines[0]);
  const [T, A] = lines[1].split(" ").map(Number);
  const H = lines[2].split(" ").map(Number);

  let c = [];
  for (let i = 0; i < N; i++) {
    c.push(Math.abs(A - (T - H[i] * 0.006)));
  }
  let min = Math.min(...c);
  console.log(c.indexOf(min) + 1);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
