//B - Palindromic Numbers
"use strict";

const main = (lines) => {
  const [a, b] = lines[0].split(" ").map(Number);
  let ans = 0;
  for (let i = a; i <= b; i++) {
    const n = i.toString().split("").reverse().join("");
    if (n === i.toString()) {
      ans++;
    }
  }

  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
