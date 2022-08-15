class Node  {
    constructor(value=null) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {

    constructor(value) {
         const newNode = new Node(value);
         this.head = newNode
         this.tail = newNode
         this.length=1;
    }

    push(value) {
        
        if(!value) return undefined;

        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.prev = null;
            this.next = null;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while(temp) {
            if(!temp.next) {
                prev.next = null;
                this.length--;
                this.tail = prev;
                return temp
            }
            prev = temp 
            temp = temp.next;      
        } 
    }

    shift() {
        if(!this.head) return undefined;
        if(this.length===1){
            this.head = null;
            this.tail = null;
            return this;
        }

        let temp = this.head;

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;

        this.length--;

        return this;
    }

    unshift(value) {
        if(!this.head) return undefined;

        const newNode = new Node(value);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        let temp = this.head;
        this.head.prev = newNode;
        newNode.next = temp;
        this.head = newNode;
        return this;
    }

    remove()

}


let dll = new DoublyLinkedList(1);

dll.push(2)
dll.push(3)

console.dir(dll, {depth: null})
console.log('-----------------------------------------------------------------')
console.log('-----------------------------------------------------------------')
console.log('-----------------------------------------------------------------')
console.log('Poping out the value......')
let poped = dll.pop()
console.log('Poped value', poped)
console.dir(dll, {depth: null})