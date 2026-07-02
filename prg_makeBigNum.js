function solution(number, k) {
    const stack = [];

    for (const num of number) {
        while (
            k > 0 &&
            stack.length > 0 &&
            stack[stack.length - 1] < num
        ) {
            stack.pop();
            k--;
        }

        stack.push(num);
    }

    // 아직 제거해야 할 개수가 남아 있다면 뒤에서 제거
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join("");
}