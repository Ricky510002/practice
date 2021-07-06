//B - Counting Roads
"use strict";

const main = (lines) => {
  lines = lines.map((item) => item.split(" ").map(Number));
  let N = lines[0][0];
  let M = lines[0][1];
  let AB = lines.slice(1);
  let cnt = 0;
  let ans = [];
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === AB[j][0] || i === AB[j][1]) {
        cnt++;
      }
    }
    ans.push(cnt);
    cnt = 0;
  }

  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
