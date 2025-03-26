/* test.ts
* 
* Test TLFB bugs.
*/

const CVT_MS_S = 1000;
const CVT_S_MIN  = 60;
const CVT_MIN_HR = 60;
const CVT_HR_DAY = 24;
const CVT_MS_DAY = CVT_MS_S * CVT_S_MIN * CVT_MIN_HR * CVT_HR_DAY;

const CVT_HR_DAY_DST = 25;
const CVT_MS_DAY_DST = CVT_MS_S * CVT_S_MIN * CVT_MIN_HR * CVT_HR_DAY_DST;


let date_end_right: string = '2025-03-08'
let date_start_right: string = '2025-03-06'

console.log('Correct (Non-DST Day):')

const days_apart_right = ((new Date(date_end_right)).valueOf() - (new Date(date_start_right)).valueOf()) / CVT_MS_DAY + 1
console.log('   days apart:', days_apart_right)

const end_day_after_right = new Date(date_end_right)
console.log('   entered date:', end_day_after_right.toISOString().split("T")[0])

end_day_after_right.setDate(end_day_after_right.getDate() + 1)
console.log('   date plus 1:', end_day_after_right.toISOString().split("T")[0])

const end_day_hack_right = new Date(date_end_right)
end_day_hack_right.setMilliseconds(end_day_hack_right.getMilliseconds() + CVT_MS_DAY_DST)
console.log('   date plus 1 (hack):', end_day_hack_right.toISOString().split("T")[0])

let date_end_wrong: string = '2025-03-09'
let date_start_wrong: string = '2025-03-06'

console.log('Incorrect (DST Day):')

const days_apart_wrong = ((new Date(date_end_wrong)).valueOf() - (new Date(date_start_wrong)).valueOf()) / CVT_MS_DAY + 1
console.log('   days apart:', days_apart_wrong)

const end_day_after_wrong = new Date(date_end_wrong)
console.log('   entered date:', end_day_after_wrong.toISOString().split("T")[0])

end_day_after_wrong.setDate(end_day_after_wrong.getDate() + 1)
console.log('   date plus 1:', end_day_after_wrong.toISOString().split("T")[0])

const end_day_hack_wrong = new Date(date_end_wrong)
end_day_hack_wrong.setMilliseconds(end_day_hack_wrong.getMilliseconds() + CVT_MS_DAY_DST)
console.log('   date plus 1 (hack):', end_day_hack_wrong.toISOString().split("T")[0])
