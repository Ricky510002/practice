//C - Unification
"use strict";

const main = (lines) => {
  let s = lines[0].split("").map(Number);

  let obj = {
    0: 0,
    1: 0,
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 0) {
      obj[0]++;
    } else {
      obj[1]++;
    }
  }

  const ans = Math.min(obj[0], obj[1]);
  console.log(ans * 2);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
