//C - chokudai
"use strict";

const main = (lines) => {
  const s = lines[0];
  const t = "chokudai";
  const arr = Array(s.length + 1)
    .fill()
    .map((_) => Array(t.length + 1).fill(0));

  for (var i = 0; i < s.length; i++) {
    arr[i][0] = 1;
  }

  for (var i = 1; i < s.length + 1; i++) {
    for (var j = 1; j < t.length + 1; j++) {
      arr[i][j] =
        s[i - 1] === t[j - 1]
          ? (arr[i - 1][j - 1] + arr[i - 1][j]) % (Math.pow(10, 9) + 7)
          : arr[i - 1][j];
    }
  }

  console.log(arr[s.length][t.length]);
};

main(require("fs").readFileSync("c.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
