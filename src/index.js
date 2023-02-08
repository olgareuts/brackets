module.exports = function check(str, bracketsConfig) {
  let result;
  let counter = 0;
  while (counter !== bracketsConfig.length) {
    bracketsConfig.forEach (el => {
      brackets=el[0] + el[1];
      let pos = str.indexOf(brackets);
      if (pos !== -1) {
        str = str.substring(0, pos) + str.substring(pos + 2, str.length);
      } else {
        counter++;  
      }
    })
    if (counter === bracketsConfig.length) {
      result = (str.length) ? 0 : 1;
    } else {
      counter = 0;
    }
  }
  return result;
}


