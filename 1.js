//C - Prison
"use strict";

const main = (lines) => {
  const [n, k, q] = lines[0].split(" ").map(Number);

  let arr = Array(n).fill(k - q);

  for (let i = 1; i < q + 1; i++) {
    arr[Number(lines[i]) - 1]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
