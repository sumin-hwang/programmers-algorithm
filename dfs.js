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
    const visited = []; // 탐색을 마친 노드
    let needVisit = []; // 탐색해야 할 노드

    needVisit.push(startNode); // 노드 탐색 시작

    while(needVisit.length !== 0){ // 탐색해야 할 노드가 남아있다면
        const node = needVisit.shift(); // queue이므로 선입선출, shift()

        if(!visited.includes(node)){ // 해당 노드가 탐색 된 적이 없다면,,
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

function dfs_stack(graph, start, visited) {
  const stack = [];
  stack.push(start);

  while (stack.length) {
    let v = stack.pop();
    if (!visited[v]) {
      console.log(v);
      visited[v] = true;

      for (let node of graph[v]) {
        if (!visited[node]) {
          stack.push(node);
        }
      }
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



const bfs = (graph, start, visited) => {
    const q = [];
    q.push(start);
    visited[start] = true;

    while(q.length !== 0){
        const v = q.shift(); // 현재 노드 꺼냄

        for(const next of graph[v]){ // 인접 노드 순환
            if(!visited[next]){
                q.push(next); // 방문하지 않은 애는 추가
                visited[next] = true; // 방문 표시
            }
        }
    }
}

const binarySearch = (arr, target, start, end) => {
  if (start > end) return -1; //원소가 존재하지 않는 경우

  const mid = ~~((start + end) / 2);
  if (target === arr[mid]) 
    return mid;
  else if (target < arr[mid]) 
    return binarySearch(arr, target, start, mid - 1);
  else 
  return binarySearch(arr, target, mid + 1, end);
};

const binarySearch2 = (arr, target, start, end) => {
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (target === arr[mid]) 
        return mid;
    else if (target < arr[mid]) 
        end = mid - 1;
    else 
    start = mid + 1;
  }

  return -1;
};


const testdfs = (graph, v, visited) => {
    visited[v] = true;
    console.log(v);

    for(const cur of graph[v]){
        if(!visited[cur]){
            dfs
        }
    }
}

const bfs2 = (graph,v,visited) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while(q.length){
    const v= q.shift();

    for(const next of graph[v]){
      if(!visited[next]){
        q.push(next);
        visited[next] = true;
      }
    }
  }
}

const b2 = (graph,v,visited) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while(q.length){
    const v = q.shift();

    for(const next of graph[v]){
      if(!visited[next]){
        q.push(next);
        visited[next] = triggerAsyncId;
      }
    }
  }
}

const dfs = (graph, start, visited) => {
  const stack = [start];

  while(stack.length){
    const v = stack.pop();

    if(!visited[v]){
      visited[v] = true;

      for(let i = graph[v].length -1; i >= 0; i--){
        const next = graph[v][i];
        if(!visited[next]){
          stack.push(next);
        }
      }
    }
  }
}

const bfs_3 = (graph, start, visited) => {
  const q = [start];

  while(q.length){
    const v = q.shift();

    if(!visited[v]){
      
    }
  }
}