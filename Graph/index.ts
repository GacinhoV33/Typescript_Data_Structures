import {Queue} from 'queue-typescript';

export class Vertex{
    id: string;
    data: any;
    constructor(id: string, data: any){
        this.id = id;
        this.data = data;
    }
}

export default class Graph{
    adjList: Map<string, string[]>;
    noOfVertices: number;
    constructor(noOfVertices: number){
        this.adjList = new Map();
        this.noOfVertices = noOfVertices
    };

    addVertex(vertex: Vertex): void {
        this.adjList.set(vertex.id, [])
    };

    addEdge(src: Vertex, destination: Vertex): void {
        this.adjList.get(src.id)?.push(destination.id);
        this.adjList.get(destination.id)?.push(src.id);
    };

    printGraph(): void{
        var get_keys = this.adjList.keys();
        for(var i of get_keys){
            var get_values = this.adjList.get(i);
            var conc = "";
            for (var j of get_values as string[])
                conc += j + " ";
            console.log(i + " -> " + conc); 
        }
    }

    bfsSearch(startingNode: Vertex): void{
        let visited: Map<string, boolean> = new Map();
        let q = new Queue();

        visited.set(startingNode.id, true);
        q.enqueue(startingNode.id);
        while(q.length > 0){
            var getQueueElement: string = q.dequeue() as string;
            console.log(getQueueElement);
            var get_List = this.adjList.get(getQueueElement);
            if(get_List && get_List?.length > 0){
                for (var neigh of get_List as string[]) {
                    if (!visited.get(neigh)) {
                        visited.set(neigh, true);
                        q.enqueue(neigh);
                    }
                }
            }
                
        }
    }

    dfsUtil(vertex: string, visited: Map<string, boolean>): void{
        visited.set(vertex, true);
        console.log(vertex);
    
        var get_neighbours = this.adjList.get(vertex);
    
        if(get_neighbours && get_neighbours.length > 0){
            for (var get_elem of get_neighbours) {
                if (!visited.get(get_elem))
                    this.dfsUtil(get_elem, visited);
            }
        }
    }

    dfsSearch(startingNode: Vertex) : void{
        var visited: Map<string, boolean> = new Map();
 
        this.dfsUtil(startingNode.id, visited);
    }
}