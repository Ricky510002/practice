//B - Guidebook
"use strict";

const main = (lines) => {
  let N = lines.shift() * 1;

  let arr = [];

  for (let i = 0; i < N; i++) {
    let l = lines[i].split(" ");
    let c = l[0];
    let s = l[1] * 1;
    arr.push({ c: c, s: s, i: i + 1 });
  }

  arr.sort((a, b) => {
    if (a.c == b.c) {
      //文字列が同じ時は数値の高い順に
      return b.s - a.s;
    } else {
      return a.c < b.c ? -1 : 1;
    }
  });

  arr.forEach((a) => {
    console.log(a.i);
  });
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
