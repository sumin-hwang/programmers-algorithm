import sys
import heapq as hq
input = sys.stdin.readline

N = int(input())
heap = []

for _ in range(N):
    row = list(map(int, input().split()))
    
    for num in row:
        hq.heappush(heap, num)
        
        if len(heap) > N:
            hq.heappop(heap)

print(heap[0])