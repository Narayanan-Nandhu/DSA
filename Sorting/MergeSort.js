let a = [1,3,7,8], b=[2,4,5,6];

function merge(a,b) {
    let combined = [];
    let i=0, j=0;
    while(i<a.length && j<a.length) {
        if(a[i]<b[j]) {
            combined.push(a[i]);
            i++;
        } else {
            combined.push(b[j]);
            j++;
        }
    }

    while(i<a.length) {
        combined.push(a[i]);
        i++;
    }

    while(j<b.length) {
        combined.push(b[j]);
        j++;
    }
    return combined;
}

// if the two arrays are sorted.
let data = merge(a, b);
// console.table(data);



// If the arrays are not sorted. Need to Break it in recursively and then combine it.
let arr = [3,1,4,2];

function mergeSort(arr) {

    if(arr.length===1) return arr;

    let mid = Math.floor(arr.length/2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}

let data2 = mergeSort(arr);
console.table(data2);