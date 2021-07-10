
// コマンドラインで標準入力受け取るときはこれ
const input = process.argv;
const n = parseInt(input[2], 10);
const arrMV = input[3].split("");

console.log(process.argv);
console.log(arrMV);

results = junretsu(arrMV, n);

function junretsu(balls, nukitorisu){
  let arrs, i, j, zensu, results, parts;
  arrs = [];
  zensu = balls.length;
  if(zensu < nukitorisu){
    return;
  }else if(nukitorisu == 1){
    for(i = 0; i < zensu; i ++){
      arrs[i] = [balls[i]];
    }
  }else{
    for(i = 0; i < zensu; i ++){
      parts = balls.slice(0);
      parts.splice(i, 1)[0];
      results = junretsu(parts, nukitorisu - 1);
      for(j = 0; j < results.length; j ++){
        arrs.push([balls[i]].concat(results[j]));
      }
    }
  }
  return arrs;
}

let ans = 0;
for(let i = 0; i < results.length; i++){
  if(arrMV === results[i]){
    let ans = ans + 1;
  }
  
}
console.log(ans);



