/*
 * Filename: /Users/A966AK/Workspace/axa-se/darts.js
 * Path: /Users/A966AK/Workspace/axa-se
 * Created Date: Wednesday, November 18th 2020, 1:50:43 pm
 * Author: James MARTIN
 * 
 * Copyright (c) 2020 Your Company
 */

const _ = require("lodash");
const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25];

const moves = values.reduce((m, val) => {
  m.push({
    name: `S${val}`,
    value:  val
  });
  m.push({
    name: `D${val}`,
    value:  2*val
  });
  if(val < 25) {
    m.push({
      name: `T${val}`,
      value:  3*val
    });
  }
  return m;
},[]);

const doubleDartScores = moves.filter(move => move.name.includes("D")).map(move => 99 - move.value);

const doubleDartMoves = _.uniqBy(moves.map(move => {
  return moves.map(m => ({
    name: [move.name,m.name].sort().join(","),
    value: move.value + m.value
  }))
}).flat(), "name");


const allMoves = doubleDartMoves.concat(moves).concat({
  name: "miss",
  value: 0
})

console.log(allMoves.length * 21);

const nbMoves = doubleDartScores.map(score => allMoves.filter(move => move.value <= score).length )

console.log(nbMoves.reduce((total, nbMove) => {
  return total+nbMove;
},0));