//B - Shiritori
"use strict";

const main = (lines) => {
  const n = Number(lines[0]);
  let w = lines.slice(1);
  // setには重複する値が格納できない
  let check = Array.from(new Set(w));

  if (w.length !== check.length) {
    console.log("No");
    return;
  }
  for (let i = 1; i < n; i++) {
    if (w[i - 1].slice(-1) !== w[i].slice(0, 1)) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
