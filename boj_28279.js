class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Deque{
    constructor(){
        this.init();
    }

    init(){
        this.length = 0;
        this.rear = null;
        this.front = null;
    }

    unshift(value){
        const node = new Node(value);

        if(!this.front){
            this.front = node;
            this.rear = node;
        }else{
            const temp = this.front;
            temp.prev = node;
            this.front = node;
            node.next = temp;
        }

        this.length++;

    }

    push(value){
        const node = new Node(value);

        if(this.length === 0){
            this.front = node;
            this.rear = node;
        }else{
            const temp = this.rear;
            temp.next = node;
            this.rear = node;
            node.prev = temp;
        }

        this.length++;
    }

    shift(){
        if(this.length === 0) return -1;

        const value = this.front.value;

        if(this.length === 1){
            this.init();
        }else{
            this.front = this.front.next;
            this.front.prev = null;
            this.count--;
        }

        return value;
    }

    pop(){
        if(this.length === 0) return -1;

        const value = this.rear.value;

        if(this.length === 1){
            this.init();
        }else{
            this.rear = this.rear.prev;
            this.rear.next = null;
            this.count--;
        }
        return value;
    }

}

const N = input.shift();
const deque = new Deque();
let ans = [];

for (let e of input){
    let [key, num] = e.split(" ");
    
    switch(key){
        case 1 :
            deque.unshift(num);
            break;
        case 2 :
            deque.push(num);
            break;
        case 3 :
            ans.push(deque.shift(num));
            break;
        case 4:
            ans.push(deque.pop(num));
            break;
        case 5:
            ans.push(deque.length);
            break;
        case 6:
            deque.length === 0 ? ans.push(1) : ans.push(0);
            break;
        case 7:
            let temp = deque.shift();

            if(temp !== -1){
                ans.push(temp);
                deque.unshift(temp);
            }else{
                ans.push(-1);
            }
            
            break;
        case 8:
            let temp1 = deque.pop();
            if(temp1 !== -1){
                ans.push(temp1);
                deque.push(temp1);
            }else{
                ans.push(-1);
            }
            break;
    }
}

console.log(ans);