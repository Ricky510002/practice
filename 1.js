//C - Welcome to AtCoder
"use strict";

const main = (lines) => {
  const [n, m] = lines[0].split(" ").map(Number);
  const q = lines.slice(1);

  const his = {};
  let ans = 0;
  let penalty = 0;

  for (let i = 0; i < m; i++) {
    const [a, b] = q[i].split(" ");
    if (b === "WA" && his[a] !== "AC") his[a] = ~~his[a] + 1;

    if (b === "AC" && his[a] !== "AC") {
      penalty += ~~his[a];
      ans++;
      his[a] = "AC";
    }
  }

  return console.log(ans, penalty);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
