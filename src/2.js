const fs = require('fs');
const path = require('path');

function getRandomNodeJSCode() {
  const code = `
    // This is a comment
    console.log("Hello World");
    console.log("This is a random nodejs code");
    console.log("I hope this helps you with your project");
    console.log("Let me know if you have any questions or need help");
  `;
  return code;
}

module.exports = { getRandomNodeJSCode };
