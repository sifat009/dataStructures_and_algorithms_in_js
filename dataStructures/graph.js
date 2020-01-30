const Node = (value) => {
    const neighbours = [];
    return {
        value,
        neighbours,
        addNeighbour(node) {
            neighbours.push(node);
        }
    }
}

const Graph = (directed = false) => {
    const nodes = [];
    const edges = [];
    return {
        directed,
        nodes,
        edges,
        addNode(value) {
            nodes.push(Node(value));
        },
        findNode(value) {
            return nodes.find(n => n.value === value);
        },
        addEdge(node1Value, node2Value) {
            const node1 = this.findNode(node1Value);
            const node2 = this.findNode(node2Value);
            node1.addNeighbour(node2);
            if (!directed) node2.addNeighbour(node1);
            edges.push(`${node1Value}-${node2Value}`);
        },
        print() {
            return nodes.map(({
                value,
                neighbours
            }) => {
                let result = `${value}`;
                neighbours.length && (result += ` => ${neighbours.map(neighbour => neighbour.value).join(' ')}`);
                return result;
            }).join('\n');
        },
        bfs(startFrom, visitFn) {
            const startNode = this.findNode(startFrom);
            const queue = [];
            queue.push(startNode);
            const visited = nodes.reduce((acc, node) => {
                !acc[node.value] && (acc[node.value] = false);
                return acc;
            }, {})

            while (queue.length) {
                const currentNode = queue.shift();
                if (!visited[currentNode.value]) {
                    visitFn(currentNode);
                    visited[currentNode.value] = true;
                }
                currentNode.neighbours.forEach(neighbour => {
                    !visited[neighbour.value] && queue.push(neighbour)
                })
            }
        },
        dfs(startFrom, visitFn) {
            const startNode = this.findNode(startFrom);
            const visited = nodes.reduce((acc, node) => {
                !acc[node.value] && (acc[node.value] = false);
                return acc;
            }, {});
            explore = (node) => {
                if (visited[node.value]) return;
                visitFn(node);
                visited[node.value] = true;
                node.neighbours.forEach(neighbour => explore(neighbour));
            }
            explore(startNode);
        }
    }
}

// const friutGraph = Graph();

// friutGraph.addNode('Mango');
// friutGraph.addNode('Fozli');
// friutGraph.addNode('Lengra');
// friutGraph.addNode('Himsagor');
// friutGraph.addNode('Katari-Vogh');

// friutGraph.addNode('Banana');
// friutGraph.addNode('Sobri');
// friutGraph.addNode('Kobri');
// friutGraph.addNode('Sagor');

// friutGraph.addEdge('Mango', 'Fozli');
// friutGraph.addEdge('Mango', 'Lengra');
// friutGraph.addEdge('Mango', 'Himsagor');
// friutGraph.addEdge('Mango', 'Katari-Vogh');

// friutGraph.addEdge('Banana', 'Sobri');
// friutGraph.addEdge('Banana', 'Kobri');
// friutGraph.addEdge('Banana', 'Sagor');

// // console.log(friutGraph.print());
// friutGraph.bfs('Mango', (node) => {
//     console.log(node.value);
// })

const graph = Graph(true)
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e']
]

nodes.forEach(node => {
    graph.addNode(node)
})

edges.forEach(nodes => {
    graph.addEdge(...nodes)
})

// graph.bfs('a', node => {
//     console.log(node.value)
// })
graph.dfs('a', node => {
    console.log(node.value)
})