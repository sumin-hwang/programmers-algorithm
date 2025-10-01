
const N = Number(input.shift());
const map = new Array(N);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < N; i++){
    map[i] = input[i].split("");
}

const dfs = (x, y, map, visited) => {
    const stack = [[x, y]];
    const letter = map[x][y];
    visited[x][y] = true;

    while(stack.length){
        const [vx, vy] = stack.pop();

        for(let i =0; i < 4; i++){
            const [nx, ny] = [vx + dx[i], vy + dy[i]];

            if(nx >= 0 && nx < N && ny >=0 && ny < N && !visited[nx][ny]){
                if(letter === map[nx][ny]){
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
    }
}

function test(map){
    let count = 0;
    const visited = Array.from({length : N }, () => Array(N).fill(false));
    for(let i =0; i < N; i++){
        for(let j =0; j < N; j++){
            if(!visited[i][j]){
                dfs(i, j, map, visited);
                count++;
            } 
        }
    }

    return count;
}

console.log(test(map));
const RGmap = map.map(c => c.map(j => j === 'R' ? j = 'G' : j));
console.log(test(RGmap));
