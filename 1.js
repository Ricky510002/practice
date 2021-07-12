//B - 文字列大好きいろはちゃんイージー
"use strict";

const main = (lines) => {
  let [N, L] = lines[0].split(" ").map(Number);
  let arr = [];

  for (let i = 1; i < N + 1; i++) {
    arr.push(lines[i]);
  }
  arr.sort();
  console.log(arr.join(""));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
