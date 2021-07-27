//C - To Infinity
"use strict";

const main = (lines) => {
  let S = lines[0].split(""); 1234
  let K = parseInt(lines[1]); 4
  let ans = "1";
  for (let i = 0; i < K; i++) { 
    let s = S[i];
    if (i === K && s == "1") break;
    if (s == "1") continue;
    ans = s;
    break;
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
