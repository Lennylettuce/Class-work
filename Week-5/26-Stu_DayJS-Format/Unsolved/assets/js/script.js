// Use Day.js to format the date and assign to the declared variable.
var today = dayjs();
// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var thisDay = dayjs('05-22-13').format('MM D, YYYY');
$('#1a').text(thisDay);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayOfWeek = dayjs('01/10/2027').format('[It is] dddd');
$('#2a').text(dayOfWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
$('#3a').text(today.format('h:mm:ss a'));
// TODO: 4. What is the current Unix timestamp?
//creates something and reads unix
$('#4').text(dayjs().unix())
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var timestamp = dayjs.unix('1318781876').format('MM/DD/YYYY HH:mm:ss A');
$('#5a').text(timestamp);
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var diff = dayjs('05-04-2027').diff(today, 'days');
$('#6a').text(diff);
