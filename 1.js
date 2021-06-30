//B - 754 

"use strict";

const main = (lines) => {
  const S = lines[0];
  const nums = [];

  for(let i=0; i<S.length-2; i++){
    nums.push(S[i] + S[i+1] + S[i+2]);
  }
  let ans = 99999;
  for(let i=0; i<nums.length; i++){
    ans = Math.min(Math.abs(parseInt(nums[i]) - 753), ans)
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
