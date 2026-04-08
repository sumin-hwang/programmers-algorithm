import sys
import heapq as hq
sys.stdin = open("C:/Users/hsm95/vscode_/algorithm/programmers-algorithm/example.txt")

input = sys.stdin.readline

N = int(input())

heap = []

for i in range(N):
    str = list(map(int, input().split()))
    for num in str:
        hq.heappush(heap, num)

        if(len(heap)> N):
            hq.heappop(heap)
print(heap[0])
        
