class HashTable {
    constructor(size=5) {
        this.datamap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i)*23) % this.datamap.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.datamap[index]){
            this.datamap[index] = [];
        }
        this.datamap[index].push([key, value])
    }

    get(key){
        let index = this._hash(key);

        if(!this.datamap[index]) return false;

        for (let i = 0; i < this.datamap.length; i++) {
            if(this.datamap[index][i][0] === key){
                 return this.datamap[index][i][1]
            }
        }
       
    }
}


let hmt = new HashTable();

