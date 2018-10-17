
const personSet = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};
type Person = 1 | 2 | 3 | 4;
function isXThief(personNum: Person): boolean {
  const dis_A: number = (personNum !== 1) ? 1 : 0;
  const dis_B: number = (personNum === 3) ? 1 : 0;
  const dis_C: number = (personNum === 4) ? 1 : 0;
  const dis_D: number = 1 - dis_C;

  return (dis_A + dis_B + dis_C + dis_D) === 3;
}

function whoIsThief(): void {
  let i: Person;
  for (i = 1; i <= 4; i++) {
    if (isXThief(i)) {
      console.log(personSet[i]);
    }
  }
} 

whoIsThief();