const anagrams = str => {

  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  return str.split('').reduce((acc, letter, i) =>

    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);

};
let abc = anagrams('abc');
let obj = {
  'name':'lizhen',
  'age':'12',
  'address':'山东青岛市',
  'phone':'18410118698'
};
let objKeys = Object.keys(obj);
// objKeys.forEach(key => console.log(obj[key]));

const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
let averageS = average([2,3,61]);
// console.log(averageS)

const countoccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)