
let list = [1,8,4,6,0,3,5,2,7,9];

function selectionSort(arr) {
    let minIdx;
    for(let i=0; i<arr.length-1; i++) {
        minIdx = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIdx]) {
                minIdx = j;
            }
        }
        if(i!==minIdx) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}
console.log(selectionSort(list))