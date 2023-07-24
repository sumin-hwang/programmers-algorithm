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

// const DFS = (graph, startNode) => {
//         const visited = [];
//         let needVisit = [];
    
//         needVisit.push(startNode);
    
//         while(needVisit.length !== 0){
//             const node = needVisit.shift();
//             if(!visited.includes(node)){
//                 // 방문하려고 하는 노드가 탐색된 적이 없다면
//                 visited.push(node);
//                 needVisit = [...graph[node], ...needVisit];
//             }
//         }
    
//         return visited;
// }

