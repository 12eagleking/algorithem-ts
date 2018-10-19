/**
 *  快排
 */
/**
 * (1) mine
 */
function quicksort_1(arElem) {
    if (arElem.length <= 1) {
        return arElem;
    }
    // 分解
    var mid = arElem.length / 2 - 1;
    var sortedArElemOne = quicksort_1(arElem.slice(0, mid - 0 + 1));
    var sortedArElemTwo = quicksort_1(arElem.slice(mid + 1));
    // 合并
    var newArElem = [];
    var i = 0;
    var j = 0;
    while (true) {
        if (i >= sortedArElemOne.length) {
            return newArElem.concat(sortedArElemTwo.slice(j));
        }
        else if (j >= sortedArElemTwo.length) {
            return newArElem.concat(sortedArElemOne.slice(i));
        }
        if (sortedArElemOne[i] < sortedArElemTwo[j]) { // < 从小到大排
            newArElem.push(sortedArElemOne[i]);
            i++;
        }
        else {
            newArElem.push(sortedArElemTwo[j]);
            j++;
        }
    }
}
console.log(quicksort_1([2, 4, 1, 9, 11, 7, 5, 8, 10, 3, 4]));
// function quicksort(arElem: number[], p: number, r: number): void {
//   if (p === r) {
//   }
// }
