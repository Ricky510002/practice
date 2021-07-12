//A - Dividing a String
"use strict";

const main = (lines) => {
  let s = lines[0];
  let count = 0;
  let tmp = "";
  let current = "";
  let resultArr = [];

  for (let j = 0; j < s.length; j++) {
    current += s[j];

    if (current === tmp) continue;

    tmp = current;
    resultArr.push(current);

    current = "";
    count += 1;
  }

  let result = resultArr.length;

  console.log(result);
  return result;
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
