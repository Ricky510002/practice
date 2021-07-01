//C - Prison
"use strict";

const main = (lines) => {
  const [n, m] = lines[0].split(" ").map(Number);
  lines = lines.slice(1).filter(Boolean)

  const l = lines.map((x) => Number(x.split(" ")[0]));
  const r = lines.map((x) => Number(x.split(" ")[1]));

  const min = Math.max(...l);
  const max = Math.min(...r);

  console.log(Math.max(max - min + 1, 0));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
