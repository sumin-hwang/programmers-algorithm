function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const words = [];

    function dfs(str) {
        if (str.length > 5) return;

        if (str.length > 0) {
            words.push(str);
        }

        for (const v of vowels) {
            dfs(str + v);
        }
    }

    dfs("");

    return words.indexOf(word) + 1;
}