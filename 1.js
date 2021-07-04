//B - Picture Frame
"use strict";

const main = (lines) => {
  const [h, w] = lines[0].split(" ").map(Number);
  let wFrame = "##";
  for (let i = 0; i < w; i++) {
    wFrame += "#";
  }
  console.log(wFrame);
  for (let i = 0; i < h; i++) {
    console.log("#" + lines[i + 1] + "#");
  }
  console.log(wFrame);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
