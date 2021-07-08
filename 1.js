//B - たてなが
"use strict";

const main = (lines) => {
  const [H, W] = lines[0].split(" ").map(Number);
  for (let i = 1; i <= H; i++) {
    console.log(lines[i]);
    console.log(lines[i]);
  };
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
