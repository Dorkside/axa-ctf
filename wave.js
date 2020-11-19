/*
 * Filename: /Users/A966AK/Workspace/axa-se/heat.js
 * Path: /Users/A966AK/Workspace/axa-se
 * Created Date: Wednesday, November 18th 2020, 2:34:04 pm
 * Author: James MARTIN
 * 
 * Copyright (c) 2020 Your Company
 */

const { uniq } = require("lodash");
const _ = require("lodash");
const array = [5997, 8229, 8964, 5247];

function getPermutatedArrays(array) {
  if(array.length > 2) {
    return array.map(a => {
      const subArray = array.filter(n => n !== a);
      const result = getPermutatedArrays(subArray, a).map(n => n);
      return result.map(permutatedSubArray => [a,...permutatedSubArray]);
    }).flat(1);
  }
  return [[array[0], array[1]],[array[1], array[0]]];
}

const permutatedArrays = getPermutatedArrays(array);

const permutatedIndexes = getPermutatedArrays(new Array(array.length).fill().map((a,index) => index));

let indexes = [];
permutatedArrays.map(array => {
  for(let i = 0; i < permutatedIndexes.length; i++) {
    if(
      array[permutatedIndexes[i][0]] >= array[permutatedIndexes[i][1]] &&
      array[permutatedIndexes[i][1]] <= array[permutatedIndexes[i][2]] &&
      array[permutatedIndexes[i][2]] >= array[permutatedIndexes[i][3]]
    ) {
      indexes.push(permutatedIndexes[i]);
    }
  }
})

console.log(_.uniq(indexes.sort()));

console.log(_.uniq(_.uniq(indexes.sort()).map(sineArray => {
  let sineQuery = "";
  for(let i=0; i<sineArray.length; i++) {
    sineQuery += `arr[${sineArray[i]}]`;
    if(i < sineArray.length - 1) {
      if(i % 2 === 0) {
        sineQuery += ">=";
      } else {
        sineQuery += "<=";
      }
    }
  }
  return sineQuery;
})).join(";"));