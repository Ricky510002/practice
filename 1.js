//B - A to Z String
"use strict";

const main = (lines) => {
  const s = lines[0].split("");

  let S = s.includes("S");
  let E = s.includes("E");
  let N = s.includes("N");
  let W = s.includes("W");

  let NS = (N && S) || (!N && !S);
  let EW = (E && W) || (!E && !W);

  if (NS && EW) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
