function findMax(arrayInput) {
    let max = arrayInput[0];
    for (let i=1;i<arrayInput.length;i++){
        if (max<arrayInput[i]){
            max = arrayInput[i];
        }
        return max;
    }
}
let firstArray = [10,5,2,8,-1,6,8];
let firstResult = findMax(firstArray);
document.write("Max of array "+firstArray+" is: "+ firstResult+"<br>");
let secondArray = [2,4,0,5,1];
let secondResult = findMax(secondArray);
document.write("Max of array "+secondArray+" is: "+ secondResult+"<br>");
let thirdArray = [-8,-6,-2,-6,-1,-1,-4];
let thirdResult = findMax(thirdArray);
document.write("Max of array "+thirdArray+" is: "+ thirdResult+"<br>");
