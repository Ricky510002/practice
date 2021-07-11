//C - Not Equal
"use strict";

const main = (lines) => {
  const [[N], [...Cn]] = lines.map(a => a.split(' ').map(Number));
	const mod = 1000000007n;
	let ans = 1n;
	const C = Cn.sort((a,b) => a-b);
	for(let i=0; i<N; i++){
		const res = BigInt(C[i]) - BigInt(i);
		ans = ans * (res > 0n ? res : 0n) % mod;
	}
	console.log(ans.toString());
};

main(require("fs").readFileSync("c.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
