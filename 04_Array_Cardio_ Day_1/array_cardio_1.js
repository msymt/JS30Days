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

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const answer = new Array();

// filter
const result1 = inventors.filter((info) => info.year >= 1500 && info.year < 1600);
console.log(1, result1);
answer.push(result1);

const arrayName = {};
let index = 0;
const result2 = inventors.map((info) => {
  arrayName[index] = `${info.first}` + ' ' + `${info.last}`;
  index++;
});
console.log(2, arrayName);
answer.push(arrayName);

const result3 = inventors.sort((a, b) => a.year - b.year);
console.log(3, result3);
answer.push(result3);

const result4 = inventors.reduce((sum, time) => {
  return sum + (time.passed - time.year);
}, 0);
console.log(4, result4);
answer.push(result4);

// const result5 = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
const result5 = inventors.sort((a, b) => {
  const timeA = (a.passed - a.year);
  const timeB = (b.passed - b.year);
  return timeA < timeB ? 1: -1;
});
console.log(5, result5);
answer.push(result5);
// const result5 = inventors.sort((a, b) => {
//   const timeA = (a.passed - a.year);
//   const timeB = (b.passed - b.year);
//   return timeA > timeB ? -1: 1;
// });
// console.log(4, result5);

const result6 = people.sort((a, b) => {
  const nameA = a.toUpperCase(); // 大文字と小文字を無視する
  const nameB = b.toUpperCase();
  return nameA < nameB ? -1: 1;
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
// const result8 = data.filter((element, index, data) => {
//   if (index === data.indexOf(element)) {
//     // arrayData.push(element.)
//   } else {
//     arrayData.push(element);
//   }
//   // return index === data.indexOf(element);
// });
console.log(7, obj);
answer.push(obj);
console.log(answer);

document.write('<div>');
for (let index = 1; index <= answer.length; index++) {
  document.write('<b>問題</b>' + index + '<br />');
  const jsonString = JSON.stringify(answer[index - 1]);
  document.write(jsonString+ '<br />' + '<br />');
}
document.write('</div>');
