/**
 * 迭代法
 */
function squareRoot(a, eps, loopLimit) {
    if (loopLimit === void 0) { loopLimit = 1000; }
    var xi = a / 2; // 初始值用a的一般，很多人的选择？
    var xt;
    var count = 0;
    do {
        xt = xi;
        xi = (xt + a / xt) / 2;
        count++;
        if (count >= loopLimit) {
            return {
                hasResult: false,
                result: 0.0
            };
        }
    } while (Math.abs(xi - xt) > eps);
    return {
        hasResult: true,
        result: xi
    };
}
console.log(squareRoot(9, 0.000001));
