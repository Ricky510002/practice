//B - Ruined Square

"use strict";

const main = (lines) => {
  const [x1, y1, x2, y2] = lines[0].split(" ").map(Number);
  let dx = x2 - x1;
  let dy = y2 - y1;
  console.log((x2-dy)+" "+(y2+dx)+" "+(x1-dy)+" "+(y1+dx));
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
