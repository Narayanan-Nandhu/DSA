class Node {
    constructor(value=null) {
        this.value = value;
        this.next = null;
    }
}



class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length=1;
        newNode.next = null;
    }


    push(value) {
        const newNode = new Node(value);

        if(!this.top || this.length===0) return undefined;

        let temp = this.top;
        this.top = newNode;
        this.top.next = temp;
        this.length++;
        return this;
    }


    pop() {

        if(!this.top || this.length==0) return undefined;

        if(this.length===0){
            this.top = null;
        }
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--
    }
}

let stacks = new Stack(1);


stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5)

stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();



console.dir(stacks, {depth: 10})