/* test.ts
*
* Test TLFB bugs.
*/
var CVT_MS_S = 1000;
var CVT_S_MIN = 60;
var CVT_MIN_HR = 60;
var CVT_HR_DAY = 24;
var CVT_MS_DAY = CVT_MS_S * CVT_S_MIN * CVT_MIN_HR * CVT_HR_DAY;
var date_end_right = '2025-03-08';
console.log('Correct (Non-DST Day):');
var end_day_after_right = new Date(date_end_right);
console.log('entered date:', end_day_after_right.toISOString().split("T")[0]);
end_day_after_right.setDate(end_day_after_right.getDate() + 1);
console.log('date plus 1:', end_day_after_right.toISOString().split("T")[0]);
var date_end_wrong = '2025-03-09';
console.log('Incorrect (DST Day):');
var end_day_after_wrong = new Date(date_end_wrong);
console.log('entered date:', end_day_after_wrong.toISOString().split("T")[0]);
end_day_after_wrong.setDate(end_day_after_wrong.getDate() + 1);
console.log('date plus 1:', end_day_after_wrong.toISOString().split("T")[0]);
