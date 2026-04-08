import sys
import heapq as hq
sys.stdin = open("C:/Users/hsm95/vscode_/algorithm/programmers-algorithm/example.txt")

input = sys.stdin.readline

N = int(input())

heap = []
minheap = []

for _ in range(N) :
    temp = int(input())
    
    if temp != 0:
        hq.heappush(heap, (abs(temp), temp)) #절댓값과 실제값을 둘 다 넣음 -> 힙의 정렬은 첫번째 값 기준으로 정렬된다. 
    else:
        if heap:
            print(hq.heappop(heap)[1]) # 실제값을 뺀다.
        else:
            print(0)