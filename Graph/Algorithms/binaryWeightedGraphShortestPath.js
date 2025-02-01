
// Given a graph where every edge has weight as either 0 or 1. 
// A source vertex is also given in the graph. 
// Find the shortest path from the source vertex to every other vertex. 
// Input variables....
const noOfVertices = 9, sourceVertex = 0;
const edges = [
    [0, 1, 0],
    [0, 7, 1],
    [1, 2, 1],
    [1, 7, 1],
    [2, 3, 0],
    [2, 5, 0],
    [2, 8, 1], 
    [3, 4, 1], 
    [3, 5, 1], 
    [4, 5, 1], 
    [5, 6, 1], 
    [6, 7, 1], 
    [7, 8, 1]
];


class Node {
    constructor(vertex, weight) {
        this.to = vertex;
        this.weight = weight;
    }
}

class Graph {

    constructor(size) {
        this.size = size;
        this.adjList = Array.from( { length: size}, () => new Array());
    }

    addEdge(from, to, weight) {
        this.adjList[from].push(new Node(to, weight));
        this.adjList[to].push(new Node(from, weight));
    }

    printGraph() {
        for(let i=0; i<this.adjList.length; i++) {
            console.log(i, " ==> ", this.adjList[i])
        }
    }
}

const distanceOfNodesFromSource = new Array(noOfVertices).fill(Number.MAX_VALUE);
const trackParent = new Array(noOfVertices).fill(-1);

const shortestPathUsingBFS = (source) => {
    const Q = [source];
    distanceOfNodesFromSource[source] = 0;

    while(Q.length>0) {
        const node = Q.shift();
        const neighbours = G.adjList[node];
        // console.log('')
        for(const eachNeihbour of neighbours) {
            if(distanceOfNodesFromSource[eachNeihbour.to] > distanceOfNodesFromSource[node] + distanceOfNodesFromSource[eachNeihbour.weight]) {
                if(eachNeihbour.weight > 0) {
                    Q.push(eachNeihbour.to);
                } else {
                    Q.unshift(eachNeihbour.to)
                }
    
                trackParent[eachNeihbour.to] = node;
                distanceOfNodesFromSource[eachNeihbour.to] = distanceOfNodesFromSource[node] + eachNeihbour.weight;
            }
        }
    }

}
const G = new Graph(9);

for([from, to, weight] of edges) {
    G.addEdge(from, to, weight);
}

G.printGraph();
shortestPath(0);

console.log("Distance", distanceOfNodesFromSource);
console.log("TRACK PARENT", trackParent);

// G.printGraph();

