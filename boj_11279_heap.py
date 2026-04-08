import sys
import heapq as hq

input = sys.stdin.readline


N = int(input())

heap = []

for _ in range(N) :
    temp = int(input())
    if(temp > 0):
        hq.heappush(heap, -temp)
    elif (temp == 0 and len(heap) > 0):
        print(-hq.heappop(heap))
    else:
        print(0)