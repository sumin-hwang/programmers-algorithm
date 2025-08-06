// binary search
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


// bfs
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

// dfs - 재귀
const dfs = (graph1, v, visited) => {
    visited[v] = true; // 시작노드 방문처리
    console.log(v);

    for(const cur of graph1[v]){
        if(!visited[cur]){
            dfs(graph1, cur, visited);
        }
    }
}

//dfs - stack을 사용한
const dfs2 = (graph, start, visited) => {
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

// 인접 리스트 만들기
for(let str of input){
  const [x, y] = str.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

// dfs로 여러가지 그래프 탐색하기
for(let i =1; i <= N; i++){
  if(!visited[i]){
    dfs(graph, i, visited);
    count++;
  }
}

