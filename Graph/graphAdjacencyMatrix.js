// Simple Graph data structure represented in Adjacent matrix format....

class graph {
    constructor(size, isDirected= false) {
        this.adjacencyMatrix = Array.from({ length: size}, () => new Array(size).fill(0));
        this.isDirected = isDirected;
    }

    addEdge(vertex, edge) {
        this.adjacencyMatrix[vertex][edge] = 1;
        
        if(!this.isDirected) {
            this.adjacencyMatrix[edge][vertex] = 1 //For an undirected graph we may have return link;
        }
    }

    printGraph() {
        const len = this.adjacencyMatrix.length;
        for(let row=0; row<len; row++) {
            let str = "";
            for (let col=0; col<len; col++) {
                str+=(this.adjacencyMatrix[row][col] + " ")
            }
            console.log(str);
        }
    }
}


const G = new graph(4);

G.addEdge(0, 1);
G.addEdge(0, 2);
G.addEdge(1, 2);
G.addEdge(2, 3);

G.printGraph();

console.log("--------------------------------------------------")

const UndirectedG = new graph(4, true);

UndirectedG.addEdge(0, 1);
UndirectedG.addEdge(0, 2);
UndirectedG.addEdge(1, 2);
UndirectedG.addEdge(2, 3);

UndirectedG.printGraph();