export default class SuperArray extends Array {
    constructor(...args) {
        super(...args)
    }

    superMap(callback) {
        let newSuperArray = new SuperArray();
        this.forEach((value, index, array) => {
            newSuperArray.push(callback(value, index, array))
        })
        return newSuperArray;
    }

    superFilter(callback) {
        let newSuperArray = new SuperArray();
        this.forEach((value, index, array) => {
            if(callback(value,index, array)) newSuperArray.push(value)
        })
        return newSuperArray;
    }

    superReduce(callback = (aggregate, current) => aggregate + current, initial = 0) {
        let aggregate = initial;
        this.forEach((item, index) => {
            aggregate = callback(aggregate, item)
        })
        return aggregate;
        
    }

    superIncludes(value) { 
        for (let item of this) {
            if (value === item) return true;
        }
        return false;
    }
    
    superEvery(callback = (item)=>!!item) {
        for (let item of this) {
            if (!callback(item)) return false
        }
        return true;
     }
    
    superReverse() {

        function swap(array, index1, index2) {
            let temp = array[index1];
            array[index1] = array[index2]
            array[index2] = temp;
        }


        let newSuperArray = new SuperArray(...this)

        for (let index = 0; index < this.length / 2; index ++) {
            swap(newSuperArray, index, this.length - 1 - index)
        }

        return newSuperArray;

    }

    superSome(callback = (item)=>{!!item}) {
        for (let item of this) {
            if (callback(item)) return true
        }
        return false;
     }
    
    superConcat(extraArray) { 
        return new SuperArray(...[...(new SuperArray(...this)), ...extraArray])
    }
    
    superFind(callback = x => !!x) {
        for (let item of this) {
            if (callback(item)) return item
        }
        return false;

    }

    superFindIndex(callback = x => !!x) {
        for (let index in this) {
            if (callback(this[index])) return index
        }
        return false;

    }

    superSort(callback = (a,b) => a >= b ? -1 : 1) {

        function swap(array, index1, index2) {
            let temp = array[index1];
            array[index1] = array[index2]
            array[index2] = temp;
        }


        let newSuperArray = new SuperArray(...this);
        newSuperArray.forEach((outerValue, outerIndex) => {
            newSuperArray.forEach((innerValue, innerIndex) => {
                if (callback(outerValue,innerValue) === 1) swap(newSuperArray, innerIndex, outerIndex )
            })
            
        })
        return newSuperArray;
    }
    
    superFill(value = undefined, start = 0, end=this.length) {
        let newSuperArray = new SuperArray(...this);
        this.forEach((item, index) => {
            if (index >= start && index < end) {newSuperArray[index] = value}
        })
        return newSuperArray;
    }
}

