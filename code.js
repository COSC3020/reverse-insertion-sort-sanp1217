function insertionSortReverse(array) {
    //Start at second to last element
    for (var i = array.length - 2; i > -1; i--) {
        var val = array[i];
        var j;

        for (j = i; j < array.length - 1 && array[j + 1] < val; j++) {
            array[j] = array[j + 1]
        }
        array[j] = val;
    }
    return array;
}

//On average, each value will swap with half of the other values which is
//(n-1) / 2. Finding the average number of swaps for the whole list
//can be found by multiplying (n-1) / 2 by the number of values resulting
//in (n * (n-1)) / 2. Asymptotically, this would be Θ(n^2).