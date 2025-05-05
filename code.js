function permutationSort(a) {
    var perm = 0;
    perm = sort(a, 0, a.length -1,perm);
    return perm;
}

function sort(array, low, high, perm) {
    if (low >= high) 
        return perm;
    var p = low;
    for (var i = low +1; i <= high; i++) {
        if (array[i] < array[low]) {
            p++;
            var swap = array[p];
            array[p] = array[i];
            array[i] = swap;
            perm++;
        }
    }
    var swap = array[low];
    array[low] = array[p];
    array[p] = swap;
    perm = perm + 1;
    perm = sort(array, low, p-1, perm);
    perm = sort(array, p+1, high, perm);
    return perm;
}
