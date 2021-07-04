//
"use strict";

const main = (lines) => {
  let p = Number(lines[0]);
  const yen = [];

  function factorialize(k) {
    let j = 1;
    for (let i = 1; i <= k; i++) {
      j *= i;
    }
    return j;
  }

  for (let i = 1; i <= 10; i++) {
    yen.push(factorialize(i));
  }
  let ans = 0;

  for (let i = 9; i > -1; i--) {
    if (p >= yen[i]) {
      let x = p / yen[i];
      let y = p % yen[i];
      p = y;
      ans += Math.floor(x);
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
