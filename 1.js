//A - Ice Tea Store
"use strict";

const main = (lines) => {
  let [Q, H, S, D] = lines[0].split(" ").map(Number);
  let N = Number(lines[1]);

  let ans =
    N % 2 == 0
      ? (Math.min(Math.min(Math.min(Q * 8, H * 4), S * 2), D) * N) / 2
      : Math.min(Math.min(Q * 4, H * 2), S) +
        (Math.min(Math.min(Math.min(Q * 8, H * 4), S * 2), D) * (N - 1)) / 2;

  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
