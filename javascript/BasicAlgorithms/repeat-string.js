function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  } else if (num == 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num-1);
  }
}

console.log(repeatStringNumTimes("*", 3));
