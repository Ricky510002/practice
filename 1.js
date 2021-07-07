//B - Small and Large Integers
"use strict";

const main = (lines) => {
  const [a, b, k] = lines[0].split(" ").map(Number);

  for (let i = a; i <= b; i++) {
    if (i < a + k || i > b - k) {
      console.log(i);
    }
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
