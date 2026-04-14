const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const lines = input.slice(1);

const tree = {};
// tree 저장 algorithm
lines.forEach(line => {
    const [node, left, right] = line.trim().split(" ");
    tree[node] = [left, right];
})

let output = "";

function solve(){
    let result = "";

    // preorder 전위순회 : 루트 -> 왼쪽 -> 오른쪾
    const preOrder = (n) => {
        if (n === ".") return;

        result += n;

        preOrder(tree[n][0]); 
        preOrder(tree[n][1]);
    };
    
    // inorder 중위순회 : 왼쪽 -> 루트 -> 오른쪽
    const inOrder = (n) => {
        if(n === ".") return;
        
        inOrder(tree[n][0]);
        result += n;
        inOrder(tree[n][1]);
    };

    // postorder 후위순회 : 왼쪽 -> 오른쪽 -> 루트
    const postOrder = (n) => {
        if(n === ".") return;
        postOrder(tree[n][0]);
        postOrder(tree[n][1]);
        result += n;
    };

    preOrder("A");
    output += result + "\n";
    result = "";
    inOrder("A");
    output += result + "\n";
    result = "";
    postOrder("A");
    output += result;

    console.log(output);
}

solve();