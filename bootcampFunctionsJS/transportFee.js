function transportFee(shift) {
  var morningShift = 'morning';
  var afternoonShift = 'afternoon';
  var nightShift = 'nightshift';
  if (morningShift.includes(shift)) {
    return 'Transport fee for ' + shift + ' is: ' + ' R20';
  }
  else if (afternoonShift.includes(shift)) {
    return 'Transport fee for ' + shift + ' is: ' + ' R10';
  }
  else if (nightShift.includes(shift)) {
    return 'Transport fee for ' + shift + ' is: ' + ' free';
  }
}