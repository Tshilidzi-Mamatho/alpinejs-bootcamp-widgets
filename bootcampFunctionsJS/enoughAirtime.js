function enoughAirtime(airtimeUsed, totalAirtime) {
  var totalUsed = airtimeUsed.split(',');
  let calls = 0;
  let sms = 0;
  let data = 0;
  for (var i = 0; i < totalUsed.length; i++) {
    var totalUsed1 = totalUsed[i].trim()
    if (!totalUsed1) {
      return "Please enter values"
    } else if (totalUsed1 == 'call') {
      calls += 1.88;
    }
    else if (totalUsed1 == 'sms') {
      sms += 0.75;
    }
    else if (totalUsed1 == 'data') {
      data += 12;
    }
  }
  let sum = calls + sms + data;
  let airtimeLeft = totalAirtime - sum;
  if (airtimeLeft <= 0)
    return 'R0.00';
  else
    return 'The airtime left after use is: ' + ' R' + airtimeLeft.toFixed(2);
}
