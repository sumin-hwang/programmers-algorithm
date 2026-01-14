
const [N, M] = input.shift().split(" ").map(Number);
const arr = Array(101).fill(0);
const visited = Array(101).fill(0);

for(let place of input){
    let [x, y] = place.split(" ").map(Number);
    arr[x] = y;
}

const bfs = (start, count) => {
    const q = [[start, count]];
    visited[start] = true;
    let front = 0;

    while(front < q.length){
        const [v, diceCount] = q[front++];

        for(let i = 1; i <= 6; i++){
            const next = v + i;

            if(next === 100){
                return diceCount + 1;
            }else if (next < 100){
                if(arr[next] !== 0){
                    next = arr[next];
                }

                if(!visited[next]){
                    q.push([next, diceCount + 1]);
                    visited[next] = true;
                    
                }
            }
        }
    }
}