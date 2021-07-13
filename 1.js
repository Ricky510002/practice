//A - Digit Sum 2
"use strict";

const main = (lines) => {
  var N = lines[0];
	var l = N.length - 1;
	var lt = parseInt(N.substr(0,1));
	var rt = N.substr(1).match(/9/g);
	var ans;
	if(rt) rt = rt.length;
	else rt = -1;
	
	if(l === 0)ans = parseInt(N);
	else if(rt === l) ans = l * 9 + lt;
	else ans = l * 9 + lt - 1;
	
	console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
