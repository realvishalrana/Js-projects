function telephoneCheck(str) {
  // https://dev.to/rthefounding/checking-if-telephone-number-is-valid-4iop
  //answer
  //   1- ^ beginning of the string.
  //   2- (1\s?)? allows for "1" or "1 " if there is one.
  //   3- \d{n} checks for exactly n number of digits so \d{3}
  //   checks for three digits
  //   4. - x|y checks for either x or y so (\(\d{3}\)|\d{3}
  //   checks for either three digits surrounded by parentheses or three digits by themselves with no parentheses
  //   5. [\s\-]? checks for spaces or dashes between the groups of digits.
  //   6. $ end of the string
  // const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
  // return regex.test(str)

  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") {
    return false;
  }

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  }

  let polishPhone = str.replace(/-| /g, "");

  if (polishPhone.indexOf("(") < polishPhone.indexOf(")")) {
    polishPhone = polishPhone.replace(/\(|\)/g, "");
  }

  if (polishPhone.length === 10) {
    console.log(polishPhone);
    return true;
  } else if (polishPhone.length === 11 && polishPhone[0] === "1") {
    return true;
  }
  return false;
}

telephoneCheck("55 55-55-555-5"); //return false;
//this test not pass
