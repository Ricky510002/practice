//B - Good Distance
"use strict";

const main = (lines) => {
  lines = lines.map((x) => x.split(" ").map(Number));
  let N = lines[0][0];
  let D = lines[0][1];
  let X = lines.slice(1);
  let cnt = 0;
  let s = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = 0; k < D; k++) {
        s += Math.pow(X[i][k] - X[j][k], 2);
      }
      if (Number.isInteger(Math.sqrt(s)) == true) {
        cnt++;
      }
      s = 0;
    }
  }
  console.log(cnt);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
