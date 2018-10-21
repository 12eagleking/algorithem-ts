/**
 * 交换字符串上两个位置上的字符
 * @param chList
 * @param pos1
 * @param pos2
 */
function swap(chList, pos1, pos2) {
    var chListArr = chList.split('');
    if (pos1 !== pos2) {
        var tmp = chListArr[pos1];
        chListArr[pos1] = chListArr[pos2];
        chListArr[pos2] = tmp;
    }
    return chListArr.join('');
}
/**
 * 排列
 */
function permutation(chList, begin, end) {
    if (begin === end) {
        console.log(chList);
    }
    for (var i = begin; i <= end; i++) {
        chList = swap(chList, begin, i);
        permutation(chList, begin + 1, end);
        chList = swap(chList, begin, i);
    }
}
var testStr = 'abcd';
permutation(testStr, 0, testStr.length - 1);
