//B - Can you buy them all?
"use strict";

const main = (lines) => {
  const [n, x] = lines[0].split(" ").map(Number);
  let a = lines[1].split(" ").map(Number);

  let total = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      total += a[i];
    } else {
      let a2 = a[i] - 1;
      total += a2;
    }
  }

  if (total <= x) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("b.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
