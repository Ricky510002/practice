//B - Training Camp
"use strict";

const main = (lines) => {
  let n = Number(lines[0]);
  let power = 1;
  let a = Math.pow(10, 9) + 7;

  for (let i = 1; i <= n; i++) {
    power = (power * i) % a;
  }

  console.log(power);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
