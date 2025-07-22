const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = Number(input.shift());

const map = input.map((c) => c.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false)); // visited배열 생성

let countComplex = 0;
let countHome = 0;
let answer = [];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (x, y) => {
    if(map[x][y] === 1 && visited[x][y] === false){
        visited[x][y] = true;
        countHome++;

        for(let i =0; i < 4; i++){
            const [newX, newY] = [x + dx[i], y + dy[i]];
            if(newX >= 0 && newX < N && newY >=0 && newY < N){
                dfs(newX, newY);
            }
        }
    }
}

for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
        if(map[i][j] === 1 && visited[i][j] === false){
            dfs(i, j);
            countComplex++;
            answer.push(countHome);
            countHome = 0;
        }
    }
}

console.log(countComplex);
answer = answer.sort((a,b) => a - b);
answer.map(c => console.log(c));