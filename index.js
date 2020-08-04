
let bruteForceTwoSum = (array, sum) => {

    let arrayOfAnswers = [];

    for (let i = 0; i<array.length-2; i++){

        for (let k=i+1; k<array.length-1; k++){

            if(array[i] + array[k] === sum){
                arrayOfAnswers.push([array[i], array[k]]);
            }
        }
    }

    return arrayOfAnswers;
}

let binarySearchTwoSum = (array, sum) => {

    // let sortedArray = array.sort();
    // let arrayOfAnswers = [];

    // for(let i=0; i<sortedArray.length-1; i++){
    //     let targetNum = sum - sortedArray[i];
        
    //     if(targetNum === 0){
    //         arrayOfAnswers.push([sortedArray[i], 0]);
    //     }
    //     else if(binaryMatch(sortedArray, targetNum)){
    //         arrayOfAnswers.push([sortedArray[i], targetNum]);
    //     }
    // }

    // console.log(arrayOfAnswers);
    // return arrayOfAnswers;


    //above is working but tests only want unique arrays and must have two elements. (6,0) is not acceptable;

    let sortedArray = array.sort();
    let arrayOfAnswers = [];
    
    for(let i=0; i<sortedArray.length; i++){
        let targetNum = sum - sortedArray[i];

        if(targetNum !==0 && binaryMatch(sortedArray, targetNum)){
            
        }
    }

    return arrayOfAnswers;
}

// recursive binaryMatch 
let binaryMatch = (sortedArray, missingNum) => {

    let middleIndex = sortedArray.length/2;

    if(sortedArray[middleIndex] === missingNum){
        return true;
    }
    else if(sortedArray[middleIndex] > missingNum){
        //return left half of subarray here 
        return binaryMatch(sortedArray.slice(middleIndex));
    }
    else if(sortedArray[middleIndex] < missingNum){
        // return right half of original array here
        return binaryMatch(sortedArray.slice(0, middleIndex));
    }
    else if(sortedArray.length <=1 && sortedArray[middleIndex] !== missingNum){
        return false;
    }

    return false;
}