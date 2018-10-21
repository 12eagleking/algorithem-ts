/**
 * 交换字符串上两个位置上的字符
 * @param chList 
 * @param pos1 
 * @param pos2 
 */
function swap(chList: string, pos1: number, pos2: number): string {
  let chListArr = chList.split('');
  
  if (pos1 !== pos2) {
    const tmp = chListArr[pos1];
    chListArr[pos1] = chListArr[pos2];
    chListArr[pos2] = tmp;
  } 

  return chListArr.join('');
}

/**
 * 排列
 * (2.用字符串的位置区间来表示一个子字符串)
 */
function permutation(chList: string, begin: number, end: number): void {
  if (begin === end) { //就剩一个字符了，不需要排列了，直接输出当前的结果
    console.log(chList);
  }

  for (let i = begin; i <= end; i++) {
    chList = swap(chList, begin, i); // 把第i个字符换到begin位置，将begin+1位置看作新的子串开始
    permutation(chList, begin + 1, end); // 求解子问题
    chList = swap(chList, begin, i); // 在挑选下一个固定字符前，需要换回来
  }
}

const testStr = 'abcd';
permutation(testStr, 0, testStr.length - 1);