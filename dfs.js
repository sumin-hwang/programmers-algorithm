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

const dfs2visited = Array(6).fill(false);
const graph2 = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];

function dfs2(graph, v, visited) {
    // 현재 노드를 방문 처리
    visited[v] = true;
    console.log(v);
  
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let node of graph[v]) {
      if (!visited[node]) {
        dfs(graph, node, visited);
      }
    }
  }
  

function dfs2 (graph, v, visited){
    visited[v] = true;

    for(let node of graph[v]){
        dfs(graph, node, visited);
    }
}
  