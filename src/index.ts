/* test.ts
* 
* Test TLFB bugs.
*/

const CVT_MS_S = 1000;
const CVT_S_MIN  = 60;
const CVT_MIN_HR = 60;
const CVT_HR_DAY = 24;
const CVT_MS_DAY = CVT_MS_S * CVT_S_MIN * CVT_MIN_HR * CVT_HR_DAY;

let date_end_right: string = '2025-03-08'

console.log('Correct (Non-DST Day):')

const end_day_after_right = new Date(date_end_right)
console.log('entered date:', end_day_after_right.toISOString().split("T")[0])

end_day_after_right.setDate(end_day_after_right.getDate() + 1)
console.log('date plus 1:', end_day_after_right.toISOString().split("T")[0])

let date_end_wrong: string = '2025-03-09'

console.log('Incorrect (DST Day):')

const end_day_after_wrong = new Date(date_end_wrong)
console.log('entered date:', end_day_after_wrong.toISOString().split("T")[0])

end_day_after_wrong.setDate(end_day_after_wrong.getDate() + 1)
console.log('date plus 1:', end_day_after_wrong.toISOString().split("T")[0])