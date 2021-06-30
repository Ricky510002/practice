//B - Varied

"use strict";

const main = (lines) => {
  const arr = lines[0].split("");

  if (existsSameValue(arr)) {
    console.log("no");
  } else {
    console.log("yes");
  }
  function existsSameValue(a) {
    var s = new Set(a);
    return s.size != a.length;
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
