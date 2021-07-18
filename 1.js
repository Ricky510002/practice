//C - *3 or /2
"use strict";

const main = (lines) => {
  const N = parseInt(lines[0])
  const A = lines[1].split(" ").map((v) => parseInt(v));

  let ans = A.reduce((a, c) => {
    let cnt = 0;
    while (true) {
      if (c % 2 === 0) {
        c /= 2;
        cnt++;
      } else {
        break;
      }
    }
    return a + cnt;
  }, 0);

  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
