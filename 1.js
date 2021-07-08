//B - ∵∴∵
"use strict";

const main = (lines) => {
  const E = lines[0].split("");
  const O = lines[1].split("");
  let ans = "";

  for (let i = 0; i < E.length; i++) {
    ans += E[i];
    if (i < O.length) ans += O[i];
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
