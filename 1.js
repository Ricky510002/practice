//B - 美しい文字列
"use strict";

const main = (lines) => {
  const w = lines[0].split("");
  let ans = "Yes";

  for (let i = 0; i < w.length; i++) {
    let cnt = 0;
    w.forEach((e) => {
      if (w[i] === e) cnt++;
    });
    if (cnt % 2 === 1) {
      ans = "No";
      break;
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
