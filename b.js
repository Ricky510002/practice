//Blood Pressure
"use strict";

const main = (lines) => {
  let H = 0;
  let B2 = 0;
  let B3 = 0;
  let HR = 0;

  for (let i = 0; i < 4; i++) {
    if (lines[i] === "H") {
      H++;
    } else if (lines[i] === "2B") {
      B2++;
    } else if (lines[i] === "3B") {
      B3++;
    } else if (lines[i] === "HR") {
      HR++;
    }
  }
  if (H === 1 && B2 === 1 && B3 === 1 && HR === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("b.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
