const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input.shift().split(" ").map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let box = input.map(c => c.split(" ").map(Number));
let q = [];

box.forEach((row, i) => {
    row.forEach((val, j) => {
        if(val === 1){
            q.push([i, j]);
        }
    })
})
const bfs = () => {
    let front = 0;
    while(front < q.length){
        const [x, y] = q[front++];

        for(let i =0; i < 4; i++){
            const [nx, ny] = [x + dx[i], y + dy[i]];

            if(nx >= 0 && nx < N && ny >= 0 && ny < M){
                if(box[nx][ny] === 0){
                    box[nx][ny] = box[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
}
bfs();

let result = 0;
let hasUnripe = false;

box.forEach(row => {
    row.forEach(val => {
        if(val === 0){
            hasUnripe = true;
        }
        result = Math.max(result, val);
    })
})

console.log(hasUnripe ? -1 : result -1);