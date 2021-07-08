//B - A to Z String
"use strict";

const main = (lines) => {
  const s = lines[0].split("");
  let a = s.indexOf("A");
  let z = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "Z") {
      z = i;
    }
  }
  console.log(z - a + 1);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
