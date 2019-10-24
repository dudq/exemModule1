function tryRemoveFromArray(array,number) {
    let newArray = [];
    for (let i=0;i<array.length;i++){
        if (array[i]!==number)
            newArray.push(array[i]);
    }
    return newArray;
}
let array = [12,6,3,7,21,5,7];
let number = 2;
let removedArray  = tryRemoveFromArray(array,number);
document.write("Input array: "+array+"<br>"+"Input number: "+number+"<br> Array return is: " +removedArray+"<br>");
