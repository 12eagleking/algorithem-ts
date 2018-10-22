/**
 * 迭代法
 */

 /**
  * 计算一个数的平方根（牛顿迭代法）
  * 迭代公式：x【n+1】 = 1/2（x【n】 + a/x【n】）
  */
 
  interface Result {
    hasResult: boolean;
    result: number;
  }

  function squareRoot(a: number, eps: number, loopLimit: number = 1000): Result {
    let xi = a / 2; // 初始值用a的一般，很多人的选择？
    let xt: number;
    let count = 0;
    do {
      xt = xi;
      xi = (xt + a / xt) / 2;
      count++;
      if (count >= loopLimit) {
        return {
          hasResult: false,
          result: 0.0,
        };
      }
    } while (Math.abs(xi - xt) > eps);

    return { 
      hasResult: true,
      result: xi
    };
  }

  console.log(squareRoot(9, 0.000001));