class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor(value, size = 3) {
        const newNode = new Node(value);
        this.front = newNode;
        this.rear = newNode;
        this.length = 1;
        this.MAX_SIZE = size;
    }
    enqueue(value) {
        const newNode = new Node(value);

        if (this.length >= this.MAX_SIZE) return undefined;

        if (this.length === 0) {
            this.front = newNode;
            this.rear = newNode;
            this.length++;
            return this;
        }


        this.rear.next = newNode;
        this.rear = newNode;

        this.length++
        return this;
    }

    dequeue() {

        if (!this.front || this.length === 0) return undefined;
        let temp = this.front;
        this.front = temp.next;
        temp.next = null;
        this.length--;

        if (!this.length) {
            this.rear = null;
        }
        return temp;
    }

    peek() {
        if (!this.front) return undefined;
        let temp = this.front;
        temp.next = null;
        return temp
    }

    isfull() {
        let isfull = this.MAX_SIZE === this.length;
        console.log("isfull", isfull)
        return isfull;
    }

    isEmpty() {
        console.log("isempty", !this.length, this.length)

        return !this.length
    }
}

const q = new Queue(5, 2);

q.enqueue(6);
q.enqueue(7);
q.enqueue(8);

console.dir(q, { depth: null });

q.dequeue();
q.dequeue();
q.dequeue();



console.dir(q.peek(), { depth: null });
console.dir(q.isfull(), { depth: null });
console.dir(q.isEmpty(), { depth: null });







console.dir(q, { depth: null });
