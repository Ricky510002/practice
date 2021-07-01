//B - Not Found

"use strict";

const main = (lines) => {
  const s = lines[0];

  let base = "abcdefghijklmnopqrstuvwxyz".split("");

  let ans = "None";

  base.some((x) => {
    if (!s.includes(x)) {
      return (ans = x);
    }
  });
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
