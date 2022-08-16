let a = [1,3,7,8], b=[2,4,5,6];

function mergeSort(a,b) {
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

    while(i<b.length) {
        combined.push(b[j]);
        j++;
    }
    return combined;
}

let data = mergeSort(a, b);

console.table(data);