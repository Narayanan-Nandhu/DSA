
let list = [1,8,4,6,0,3,5,2,7,9];




function bubbleSort(list) {
    console.time('codezup');
    let listLength = list.length;
    
    for(var i=0; i<listLength;i++){
        console.log("**************************************************************");
        let swapped = false;       
        for(var j=0; j<listLength-1-i; j++) {

            console.log("List Length ===> ",listLength-1-i);

            if(list[j]>list[j+1]) {
                swapped = true
                list[j] = list[j] + list[j+1]
                list[j+1] =  list[j] - list[j+1]
                list[j] = list[j] - list[j+1]

                console.log("Swapped ==> ",list);
            } else {
                console.log("Not swapped", list);
            }
        }

        console.log("Iteration => ",i,"     ", list);
        console.log("**************************************************************");

        if(!swapped) {
            break;
        }
    }
    console.timeEnd('codezup')
}

bubbleSort(list);

