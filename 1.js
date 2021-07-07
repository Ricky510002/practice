//B - String Rotation
"use strict";

const main = (lines) => {
  let S = lines[0];
  let T = lines[1];
  for (let i = 0; i < S.length; i++) {
    S = S.split("");

    // 末尾を先頭に複製
    S.unshift(S[S.length - 1]);
    //末尾削除
    S.pop();
    S = S.join("");

    if (S == T) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
