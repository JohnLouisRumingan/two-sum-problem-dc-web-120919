
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