//B - Comparison
"use strict";

const main = (lines) => {
  const [n, k] = lines[0].split(" ").map(BigInt);
  let arr = lines[1].split(" ").map(BigInt);
  const tmp = arr.map((e) => e).sort((a, b) => (a - b < 0 ? -1 : 1));
  const give = k / n;
  let ans = new Array(Number(n)).fill(give);

  const b = tmp[(k % n) - 1n];
  for (let i = 0; i < n; i++) {
    if (arr[i] <= b) ans[i]++;
  }

  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].toString());
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
