//B - Comparison
"use strict";

const main = (lines) => {
  const a = Number(lines[0]);
  const b = Number(lines[1]);
  
  if (a > b) {
    console.log("GREATER");
  } else if(a < b){
    console.log("LESS");
  }else{
    console.log("EQUAL");
  }
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
