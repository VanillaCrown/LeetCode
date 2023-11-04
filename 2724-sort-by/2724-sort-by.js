/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
        if(fn(a)>fn(b)) return 1; //if a is before b it will return -1, but if b if before a it will return 1(+positive 1), if 0 it will just be equal to each other
        else return -1
    })
};