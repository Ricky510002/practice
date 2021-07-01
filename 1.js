//B - Five Dishes  
"use strict";

const main = (lines) => {
  const times = lines.map(Number);
  const ceilTimes = times.map(x => Math.ceil(x /10) * 10)
  const sum = (a, b) => a + b;
  let ans = 9999;
  for(let i=0; i<5; i++){
    let sumTimes = 0;
    sumTimes += ceilTimes.reduce(sum) - ceilTimes[i];
    sumTimes += times[i];
    ans = Math.min(ans, sumTimes);
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
