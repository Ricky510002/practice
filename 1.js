//B - AcCepted
"use strict";

const main = (lines) => {
  let s = lines[0].match(/^A[a-z]+C[a-z]+$/);
  console.log(s==null?"WA":"AC");
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
