// B - Count Balls

"use strict";

const main = (lines) => {
  const [N, A, B] = lines[0].split(" ").map(BigInt);

  let ans = (N / (A + B)) * A;
  let C = N % (A + B);
  if(C < A){
    ans += C;
  }else {
    ans += A;
  }
  console.log(ans.toString());
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
