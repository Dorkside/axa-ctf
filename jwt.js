/*
 * Filename: /Users/A966AK/Workspace/axa-se/jwt.js
 * Path: /Users/A966AK/Workspace/axa-se
 * Created Date: Monday, November 16th 2020, 5:01:20 pm
 * Author: James MARTIN
 * 
 * Copyright (c) 2020 Your Company
 */

 const fs = require("fs");
const jwtSimple = require("jwt-simple");

console.log(jwtSimple.encode({'auth': 'admin'}, fs.readFileSync('./key.pem'), 'HS256'));