/*
 * Filename: /Users/A966AK/Workspace/axa-se/zoo/1.js
 * Path: /Users/A966AK/Workspace/axa-se/zoo
 * Created Date: Monday, November 16th 2020, 7:57:34 am
 * Author: James MARTIN
 * 
 * Copyright (c) 2020 Your Company
 */

const animalString = `antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass`

const predators = animalString.split('\n').map(string => string.split(" eats ")).reduce((pred, [eats, eaten]) => {
  if(!pred[eaten]) {
    pred[eaten] = []
  }
  pred[eaten].push(eats);
  return pred;
},{});

const input1 = 'lion,grass,big-fish,little-fish,grass,bear,bug,little-fish,big-fish,panda,bear,fox,leaves,big-fish';

const zoo1 = input1.split(',');

let events = [];

function zooStep(z, index) {
  let _z = z;
  if(index > 0) {
    if(predators[_z[index-1]] && predators[_z[index-1]].includes(_z[index])) {
      const event = `${_z[index]} eats ${_z[index-1]}`
      events.push(event);
      _z.splice(index-1,1);
    }
  }
  if(index < _z.length - 1) {
    if(predators[_z[index+1]] && predators[_z[index+1]].includes(_z[index])) {
      const event = `${_z[index]} eats ${_z[index+1]}`
      events.push(event);
      _z.splice(index+1,1);
    }
  }
  return _z;
}

let outputZoo = zoo1;
let prevZoo = zoo1;
let i = 0;

while(i < outputZoo.length) {
  prevZoo = [...outputZoo];
  outputZoo = zooStep(outputZoo, i);
  if (prevZoo.length !== outputZoo.length) {
    i = 0;
  } else {
    ++i;
  }
}

console.log(`${input1},${events.join(',')},${outputZoo}`)