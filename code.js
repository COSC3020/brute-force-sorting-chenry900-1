function permutationSort(a) {
    var perm = 0;
    perm = sort(a, 0, perm);
    return perm;
}

function sort(array, num, perm) {
   var sorted = false;

   if (num == array.length) {
       perm += 1;
       sorted = check(array);
       if (sorted == true) {
           return perm;
       }
   }

   for (var i = num; i < array.length; i++) {
       swap(array, num, i);
       sorted = sort(array, num + 1, perm);
       sorted = check(array);
       if (sorted == true) {
           return perm;
       }
       swap(array, num, i);
   }
}

function check(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[(i + 1)]) {
            return false;
        }
    }
    return true;
}

function swap(array, num, i) {
    var temp = array[num];
    array[num] = array[i];
    array[i] = temp;
}
}
