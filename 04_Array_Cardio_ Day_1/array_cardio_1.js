const inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955,
},
{
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727,
},
{
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642,
},
{
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934,
},
{
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630,
},
{
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543,
},
{
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947,
},
];

const inventors2 = inventors.slice(0, inventors.length);
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const answer = new Array();

// filter
const result1 = inventors.filter((info) => info.year >= 1500 && info.year < 1600);
console.log(1, result1);
answer.push(result1);

// map
const result2 = inventors.map((info) => {
  return `${info.first}` + ' ' + `${info.last}`;
});
console.log(2, result2);
answer.push(result2);

// sort
// inventorを使うと、上手くいかない。
const result3 = inventors2.sort((a, b) => {
  // console.log(a.year);
  // console.log(b.year);
  return a.year > b.year ? 1: -1;
});
console.log(3, result3);
answer.push(result3);

// reduce
const result4_tmp = inventors.reduce((sum, time) => {
  return sum + (time.passed - time.year);
}, 0);
const result4 = [result4_tmp];
console.log(4, result4);
answer.push(result4);
console.log(answer);


// sort
// const result5 = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
const result5 = inventors.sort((a, b) => {
  const timeA = (a.passed - a.year);
  const timeB = (b.passed - b.year);
  return timeA < timeB ? 1: -1;
});
console.log(5, result5);
answer.push(result5);

// sort
const result6 = people.sort((a, b) => {
  const arrA = a.toUpperCase().split(','); // 大文字と小文字を無視する
  const arrB = b.toUpperCase().split(',');
  return arrA[1] < arrB[1] ? -1: 1;
});
console.log(6, result6);
answer.push(result6);


const obj = {};
data.map((element) => {
  if (!obj[element]) { // if obj.car : falsy
    obj[element] = 0; // obj = {car: 0} <- define object property
  }
  obj[element]++;
});

obj.length = Object.keys(obj).length;
console.log(7, obj);
answer.push(obj);
console.log(answer);

let temp = 0;
document.write('<div>');
for (let index = 1; index <= answer.length; index++) {
  document.write('<b>問題</b>' + index + '<br />');
  for (let j = 1; j <= answer[index - 1].length; j++) {
    if (answer[index - 1][j - 1] === undefined) {
      delete answer[index -1].length;
      const jsonString = JSON.stringify(answer[index - 1]);
      document.write(jsonString+ '<br />');
      break
    }
    const jsonString = JSON.stringify(answer[index - 1][j - 1]);
    document.write(jsonString+ '<br />');
  }
}
document.write('</div>');