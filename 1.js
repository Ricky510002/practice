//B - Postal Code

"use strict";

const main = (lines) => {
  let [a, b] = lines[0].split(" ").map(Number);
  let s = lines[1];

  let r = new RegExp(`^\\d{${a}}-\\d{${b}}$`);

  // 指定された正規表現と一致しているかtest()で確かめる

  console.log(r.test(s) ? "Yes" : "No");
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
