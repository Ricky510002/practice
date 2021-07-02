//C - Coloring Colorfully
"use strict";

const main = (lines) => {
  const s = lines[0].split("");
  let cnt1 = 0;
  for (let i = 0; i < s.length; i++) {
    const c = i % 2 ? "0" : "1";
    if (s[i] !== c) cnt1++;
  }
  let cnt2 = 0;
  for (let i = 0; i < s.length; i++) {
    const c = i % 2 ? "1" : "0";
    if (s[i] !== c) cnt2++;
  }

  console.log(Math.min(cnt1, cnt2));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
