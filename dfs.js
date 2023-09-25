const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while(needVisit.length !== 0){
        const node = needVisit.shift();

        if(!visited.includes(node)){
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }

    return visited;
}


console.log(DFS(graph, "A"));

// 재귀를 사용한 DFS 구현

const dfs = (graph1, v, visited) => {
    visited[v] = true; // 시작노드 방문처리
    console.log(v);

    for(const cur of graph1[v]){
        if(!visited[cur]){
            dfs(graph1, cur, visited);
        }
    }
}

let graph1 = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ]
  
  let visited = [...Array(9).fill(false)];
  
  dfs(graph, 1, visited);
