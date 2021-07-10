//C - Poll
"use strict";

const main = (lines) => {
  const N = Number(lines.shift());
  lines = lines.sort();
  let counter = 0;
  let counterMax = 0;
  let list = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === lines[i + 1]) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > counterMax) {
      list = [lines[i]];
      counterMax = counter;
    } else if (counter == counterMax) {
      list.push(lines[i]);
    }
  }

  console.log(list.join("\n"));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
