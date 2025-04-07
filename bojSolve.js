// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");



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

const num = Number(input[0]);

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value){
        const node = new Node(value);

        if(this.head){
            this.tail.next = node;
            node.prev = this.tail;
        }else{
            this.head = node;
        }

        this.tail = node;
        this.length++;
        return node;
    }

    remove(){
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getHead(){
        return this.head.value;
    }
}

function solution(num) {
    const cards = new LinkedList();
    for(let i = 1; i <= num; i++){
        cards.add(i);
    }

    while(cards.length > 1){
        cards.remove();
        cards.add(cards.getHead());
        cards.remove();
    }

    return cards.getHead();
}

const card = solution(num);
console.log(card);