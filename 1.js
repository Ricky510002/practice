//C - Exception Handling
"use strict";

const main = (lines) => {
  lines.shift();
  let a = lines.map((val) => parseInt(val, 10));
  
  let x = [...a];
  x.sort((a, b) => b - a);
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] != x[0]) {
      console.log(x[0]);
    } else {
      console.log(x[1]);
    }
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
