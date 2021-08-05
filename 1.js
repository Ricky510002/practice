//C - Average Length
"use strict";

const main = (lines) => {
  lines = lines.trim().split("\n");
  let n = parseInt(lines[0], 10);
  lines.shift();
  let a = [];
  for (let i = 0; i < lines.length; i++) {
    let t = lines[i].split(" ").map((val) => parseInt(val, 10));
    a.push(t);
  }

  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum += Math.sqrt((a[i][0] - a[j][0]) ** 2 + (a[i][1] - a[j][1]) ** 2);
      count++;
    }
  }

  console.log((sum * (n - 1)) / count);
};

// main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));
main(require("fs").readFileSync("stdin.txt", "utf8"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
