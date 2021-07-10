//C - Poll
"use strict";

const main = (lines) => {
  

};

main(require("fs").readFileSync("a.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
