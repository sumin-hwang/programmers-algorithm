// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const { NOMEM } = require('dns');

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");


//let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const [M, N, H] = input.shift().split(" ").map(Number);

let box = [];
let q = [];

for(let h = 0; h < H; h++){
    const layer = [];
    for(let n =0; n < N; n++){
        const row = input.shift().split(" ").map(Number);
        layer.push(row);

        row.forEach((val, m) => {
            if(val === 1) q.push([h , n , m ]);
        })
    }
    box.push(layer);

}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const bfs = () => {
    let front = 0;
    while(front < q.length){
        const [z, x, y] = q[front++];

        for(let i =0; i < 6; i++){
            const [nz, nx, ny] = [z + dz[i], x + dx[i], y + dy[i]];
            if
        }
    }
}

bfs();

let result = 0;
let hasUnripe = false;

box.forEach(row => {
    row.forEach(val => {
        if(val === 0){
            hasUnripe = true;
        }
        result = Math.max(result, val);
    })
})

console.log(hasUnripe ? -1 : result -1);