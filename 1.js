//C - Lower
"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  let h = lines[1].split(" ").map(Number);

  let ans = 0,
    tmp = 0;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    if (h[i + 1] - h[i] <= 0) {
      tmp++;
    } else {
      tmp = 0;
    }
    ans = Math.max(ans, tmp)
  }
  console.log(ans)
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
