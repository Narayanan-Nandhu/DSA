class Node {
    constructor(value = undefined, next = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return undefined;

        let temp = this.head;
        let prev = this.head;

        while (temp) {
            if (!temp.next) {
                this.tail = prev
                prev.next = null;
                this.length--;

                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                }

                return temp;
            }
            prev = temp;
            temp = temp.next;
        }

    }

    delete(value) {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp) {
            if (temp.value === value) {
                let deletingElement = temp;

                if (!deletingElement.next) {
                    return this.pop();
                }

                prev.next = deletingElement.next;

                this.length--;
                return deletingElement;
            }
            prev = temp;
            temp = temp.next;
        }
    }

    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        let temp = this.head; 
        newNode.next = temp;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        if(this.length===1) {
            this.head = null;
            this.tail = null;
            this.length--
            return this;
        }
        let temp = this.head;
        this.head = temp.next;
        this.length--;
    }

    get(index) {
        if(index<0 || index>=this.length) return undefined;
        let temp = this.head;

        for(let i = 0 ; i<index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(index, value) {
        let nodeToUpdate = this.get(index);
        if(nodeToUpdate) {
            nodeToUpdate.value = value;
        }
    }

    reverse() {
        
      let curr=this.head, prev = null, next=null;

      while(curr) {
        next = curr.next; // Get next object of the current node and store it in next variable.

        // console.log('______Next_________')
        // console.dir(next, {depth: null});

        curr.next = prev; //Make next of the curr to prev. start it will null which is last obj

        // console.log('______Curr.next_________')
        // console.dir(curr.next, {depth: null});

        // console.log('_Next_')
        // console.dir(next, {depth: null});

        prev = curr;
        // console.log('___PREV____');
        // console.dir(prev, {depth: null});
        curr = next;
        // console.log('___CURR____');
        // console.dir(curr, {depth: null});

        // console.log('---------------------------------------------------------')
      }
        this.head = prev;
    }

}


const linkedList = new LinkedList(1);

linkedList.push(2)
linkedList.push(3)
linkedList.push(4)

// linkedList.reverse();

console.log('LINKED LIST........');

let b = linkedList.delete(1);

console.log("DELETEd", b);

console.dir(linkedList, {depth: null});