var personSet = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
};
function isXThief(personNum) {
    var dis_A = (personNum !== 1) ? 1 : 0;
    var dis_B = (personNum === 3) ? 1 : 0;
    var dis_C = (personNum === 4) ? 1 : 0;
    var dis_D = 1 - dis_C;
    return (dis_A + dis_B + dis_C + dis_D) === 3;
}
function whoIsThief() {
    var i;
    for (i = 1; i <= 4; i++) {
        if (isXThief(i)) {
            console.log(personSet[i]);
        }
    }
    console.log(1);
}
whoIsThief();
