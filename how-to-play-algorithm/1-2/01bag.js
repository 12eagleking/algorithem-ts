/**
 * 0-1背包问题
 */
/**
 * 贪婪策略
 */
// （1）根据物品价值选择，每次都选价值最高的物品
// （2）根据物品重量选择，每次都选重量最轻的物品
// （3）定义一个价值密度概念，每次选择都选价值密度最高的物品
function greedyAlgo(problem, spFunc) {
    var index;
    var ntc = 0;
    while ((index = spFunc(problem.objs, problem.totalC - ntc)) != -1) {
        if (ntc + problem.objs[index].weight <= problem.totalC) {
            problem.objs[index].status = 1;
            ntc += problem.objs[index].weight;
        }
        else {
            problem.objs[index].status = 2;
        }
    }
    printResult(problem.objs);
}
function printResult(objs) {
    var totalWeght = 0;
    var totalPrice = 0;
    var consoleNum = 0;
    objs.forEach(function (obj, index) {
        if (obj.status === 1) {
            if (consoleNum === 0) {
                console.log('选择装入背包的物品编号依次是', index + 1);
            }
            else {
                console.log('、', index + 1);
            }
            totalWeght += obj.weight;
            totalPrice += obj.price;
            consoleNum++;
        }
    });
    console.log("\uFF0C\u6B64\u65F6\u5305\u4E2D\u7269\u54C1\u7684\u603B\u91CD\u91CF\u662F " + totalWeght + "\uFF0C\u603B\u4EF7\u503C\u662F " + totalPrice + "\u3002");
}
var chooseFunc1;
/**
 * （1）根据物品价值选择，每次都选价值最高的物品
 */
chooseFunc1 = function (objs, c) {
    var index = -1; // -1 表示背包容量已满
    var mp = 0;
    for (var i = 0; i < objs.length; i++) {
        if ((objs[i].status === 0) && (objs[i].price > mp) && (objs[i].weight <= c)) {
            mp = objs[i].price;
            index = i;
        }
    }
    return index;
};
var problem = {
    totalC: 150,
    objs: [
        {
            weight: 35,
            price: 10,
            status: 0
        },
        {
            weight: 30,
            price: 40,
            status: 0
        },
        {
            weight: 60,
            price: 30,
            status: 0
        },
        {
            weight: 50,
            price: 50,
            status: 0
        },
        {
            weight: 40,
            price: 35,
            status: 0
        },
        {
            weight: 10,
            price: 40,
            status: 0
        },
        {
            weight: 25,
            price: 30,
            status: 0
        },
    ]
};
greedyAlgo(problem, chooseFunc1);
