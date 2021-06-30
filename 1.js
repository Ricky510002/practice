//B - Increment Decrement

"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  const arr = lines[1].split("");

  let cnt = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === "I") {
      cnt++;
    } else if (arr[i] === "D") {
      cnt--;
    }
    if (ans < cnt) {
      ans = cnt;
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
