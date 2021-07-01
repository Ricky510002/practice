//B - Foods Loved by Everyone
"use strict";

const main = (lines) => {
  const [N, M] = lines[0].split(" ").map(Number);

  const counts = Array(M).fill(0);

  for (let i = 0; i < N; i++) {
    const likes = lines[i + 1].split(" ").map((x) => parseInt(x));
    for (let i = 0; i < likes[0]; i++) {
      counts[likes[i + 1] - 1]++;
    }
  }

  let ans = 0;
  for (let i = 0; i < M; i++) {
    if (counts[i] === N) {
      ans++;
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("stdin.txt", "utf8").trim().split("\n"));

//提出するときはこっちのファイルから読み込み
//main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
