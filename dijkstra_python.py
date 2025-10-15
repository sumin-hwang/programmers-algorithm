import heapq

def dijkstra(start, graph, n):
    INF = int(1e9)

    dist = [INF] * (n + 1) #거리배열
    dist[start] = 0 #시작 노드까지의 거리는 0

    pq = [] # 우선순위 큐
    heapq.heappush(pq, (0, start))  # (거리, 노드)

    while pq:
        cost, node = heapq.heappop(pq)

        if dist[node] < cost:
            continue

        for next_node, weight in graph[node]:
            new_cost = cost + weight
            if new_cost < dist[next_node]:
                dist[next_node] = new_cost
                heapq.heappush(pq, (new_cost, next_node))

    return dist