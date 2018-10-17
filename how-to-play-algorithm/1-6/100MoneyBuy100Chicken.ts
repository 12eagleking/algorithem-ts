/**
 * 百钱买百鸡
 */
function buy(): void {
  let count: number = 0;
  for (let roosters = 0; roosters <= 20; roosters++) { // 枚举公鸡数量
    for (let hens = 0; hens <= 33; hens++) { // 枚举母鸡数量
      let chicks = 100 - roosters - hens; // 剩下的就是小鸡的数量
      if ((chicks % 3 === 0) // 小鸡的个数应该是3的整数倍，小剪枝
        && ((5 * roosters + 3 * hens + chicks / 3) === 100) // 是否凑够100个钱
      ) {
        count++;
        console.log(`买法${count}：公鸡${roosters}，母鸡${hens}，小鸡${chicks}`);
      }
    }
  }
  console.log(`共有${count}种买法`);
}

buy();