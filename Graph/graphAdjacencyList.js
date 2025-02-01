

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = undefined;
        this.rear = undefined;
        this.length = 0;
    }

    enqueue(node) {
        const newNode = new Node(node); 

        if(!this.length) {
            this.front = newNode;
            this.rear = newNode;
            this.length++;
            return true;
        }

        this.rear.next = newNode;
        this.rear = newNode;

        this.length++;
        return true;
    }

    dequeue() {
        if(!this.length) return false;
        
        let temp = this.front;
        this.front = temp.next;
        temp.next = null;

        this.length--;

        return temp;
    }

    isEmpty() {
        return !Boolean(this.length)
    }
 }

class Graph {

    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices || 0;
        this.vertices = new Map();
    }

    // Add vertices/Nodes to Graph
    addNodes(vertex) {
        this.addVertices(vertex);
    };

    addVertices(vertex) {
        this.vertices.set(vertex, [])
    }

    // Add Edge
    addEdge(v, w) {
        this.vertices.get(v).push(w);

        // For Undirected Graph, add edge for w -> node
        this.vertices.get(w).push(v);
    }

    printGraph() {
        const getKeys = this.vertices.keys();

        for(const i of getKeys) {
            const getValues = this.vertices.get(i);
            let str = "";
            for(let j of getValues) {
                str+= j+" " 
            }
            console.log(i, " -> ", str)
        }

    }

    bfs(startingNode) {
        const visited = {};
        const Q = new Queue();

        visited[startingNode] = true;

        Q.enqueue(startingNode);
        let path = ""
        
        while(!Q.isEmpty()) {
             
            let getQueuedElement = Q.dequeue();

            path+=(" --> " + getQueuedElement.value);

            const getList = this.vertices.get(getQueuedElement.value) || [];
            for(let i of getList) {
                let neigh = i;
                if(!visited[neigh]) {
                    visited[neigh] = true;
                    Q.enqueue(neigh);
                }
            }
        }

        return path;

    }


    dfsUtils(startingNode, visited, path) {
        visited[startingNode] = true;
        path+=(" -> "+ startingNode);
        console.log(startingNode);
        const getNeigh = this.vertices.get(startingNode);
        
        for(let i of getNeigh) {
            if(!visited[i]) {
                this.dfsUtils(i, visited, path);
            }
        } 

        console.log("PATH-->", path)
        // TODO: see how we can return the path from the dfsUtils....
        //FFor Reference https://www.geeksforgeeks.org/implementation-graph-javascript/
    }

    dfs(startingNode) {
        let path = ""
        return this.dfsUtils(startingNode, {}, path);
    }
    
}


async function generateGraph () {

    const G = new Graph(5);
    const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
    vertices.forEach((value) => {
        G.addVertices(value);
    });

    G.addEdge('A', 'B');
    G.addEdge('A', 'D');
    G.addEdge('A', 'E');
    G.addEdge('B', 'C');
    G.addEdge('D', 'E');
    G.addEdge('E', 'F');
    G.addEdge('E', 'C');
    G.addEdge('C', 'F');

    G.printGraph();

    const path = G.bfs('A');
    console.log('PATH', path);

    const pathDFS = await G.dfs('A')
    await console.log("PATHDFS", pathDFS);


}

async function generateQ () {
    const Q = new Queue();
    await Q.enqueue(1);
    await console.dir(Q, {depth: null})
    await Q.enqueue(2);
    await console.dir(Q, {depth: null})
    await Q.enqueue(3);
    await console.dir(Q, {depth: null})
    
    await Q.dequeue();
    await console.dir(Q, {depth: null})
}

// generateQ();
generateGraph();
