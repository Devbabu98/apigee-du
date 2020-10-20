var currDate = new Date();
var timeZoneOffset = currDate.getTimezoneOffset();
var positiveOffset = Math.abs(timeZoneOffset);
var timeOffsetInHours = -(timeZoneOffset/60);
currDate.setHours(currDate.getHours()+timeOffsetInHours);
var minZone = (positiveOffset - Math.floor(timeOffsetInHours) * 60);
var symbolOffset = timeZoneOffset > 0 ? '-' : '+' ;
var hourOffset = Math.floor(timeOffsetInHours)+4 < 10 ? 0 : '';
var minOffset = minZone < 10 ? 0 : '';
var tzd = symbolOffset + hourOffset + Math.floor(timeOffsetInHours) + ":" + minOffset + minZone;
var dateTimeIsoString = currDate.toISOString();
// split by dot
var currDateTime = dateTimeIsoString.split('.')[0];
var dateTZDformat = currDateTime + tzd;
context.setVariable('response.header.timestamp', dateTZDformat);
context.setVariable('du.responsetimestamp', dateTZDformat);

var requestTimestamp = context.getVariable("client.received.start.timestamp");
var responseTimestamp = new Date().getTime().toFixed(0);
context.setVariable('requestTimestamp', requestTimestamp);
context.setVariable('responseTimestamp', responseTimestamp);