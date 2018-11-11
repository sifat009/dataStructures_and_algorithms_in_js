class Node {
    constructor() {
        this.endOfString = false;
        this.values = new Array(25).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    getCharCodeOf(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    insert(string) {
        let current = this.root;
        string.split('')
            .forEach( char => {
                let charCode =  this.getCharCodeOf(char);
                if(current.values[charCode] == null)
                    current.values[charCode] = new Node();
                current = current.values[charCode];
        });
        
        current.endOfString = true;
    }

    find(string) {
        let current = this.root;
        let truthFlag = true;
        string.split('')
            .every( char => {
                let charCode = this.getCharCodeOf(char);     
                if(current.values[charCode] === null) {
                    truthFlag = false;
                    return false;
                } 
                else {
                    current = current.values[charCode];
                    return true;
                }
            });
            
        return truthFlag ? current.endOfString : truthFlag;
        
    }

    clear(current = this.root) {
        for(let i = 0; i < 26; i++) {
            if(current.values[i])
                this.clear(current.values[i]);
        }
        current.endOfString = null;
        current.values = null;
    }
}

let trie = new Trie();
trie.insert('red');
let found = trie.find('red');
found ? 
    console.log('found string') :
    console.log('not a proper word');
trie.clear();
// console.log(found);
// console.log('a'.charCodeAt(0) - 'a'.charCodeAt(0));
