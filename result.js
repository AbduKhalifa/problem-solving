// Mutations Only: Zeroes to the End -- > Edabit
function zeroesToEnd(array) {
    let biggerThanZero = new Array();
    let zeroes = new Array();
    for(let i = 0; i< array.length ; i++)
        if(array[i] != 0)
            biggerThanZero.push(array[i]);
        else
            zeroes.push(array[i])
    return biggerThanZero.concat(zeroes);
}

