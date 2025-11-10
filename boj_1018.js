const [N, M] = input.shift().split(" ").map(Number);
const board = input.map(c => c.trim());

let min = Infinity;

for(let i =0; i <= N-8; i++){
  for(let j =0; j <= M-8; j++){
    let writeB = 0;
    let writeW = 0;

    for(let x =0; x < 8; x++){
      for(let y =0; y <8; y++){
        let current = board[i + x][j + y];
        let isEven = (x + y)%2;

        if(isEven){
          current !== "W" ? writeW++ : writeB++;
        }else{
          current !== "B" ? writeW++ : writeB++;
        }
      }
    }

    min = Math.min(min, writeB, writeW);
  }
}

console.log(min);