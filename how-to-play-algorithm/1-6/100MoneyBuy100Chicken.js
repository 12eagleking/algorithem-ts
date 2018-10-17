/**
 * 百钱买百鸡
 */
function buy() {
    var count = 0;
    for (var roosters = 0; roosters <= 20; roosters++) { // 枚举公鸡数量
        for (var hens = 0; hens <= 33; hens++) { // 枚举母鸡数量
            var chicks = 100 - roosters - hens; // 剩下的就是小鸡的数量
            if ((chicks % 3 === 0) // 小鸡的个数应该是3的整数倍，小剪枝
                && ((5 * roosters + 3 * hens + chicks / 3) === 100) // 是否凑够100个钱
            ) {
                count++;
                console.log("\u4E70\u6CD5" + count + "\uFF1A\u516C\u9E21" + roosters + "\uFF0C\u6BCD\u9E21" + hens + "\uFF0C\u5C0F\u9E21" + chicks);
            }
        }
    }
    console.log("\u5171\u6709" + count + "\u79CD\u4E70\u6CD5");
}
buy();
