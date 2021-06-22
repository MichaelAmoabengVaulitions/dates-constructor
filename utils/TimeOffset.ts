// import { TimeUnit } from './AddToDate'
// import {
//   DAYS_IN_WEEK,
//   HOURS_IN_DAY,
//   MILLISECONDS_IN_HOUR,
//   MILLISECONDS_IN_MINUTE,
//   MILLISECONDS_IN_SECOND,
//   MONTHS_IN_YEAR,
//   WEEKS_IN_MONTH
// } from './Constants'
// import offsetInMilliseconds from './OffsetInSeconds'

// export default function timeOffset (inputDate: Date, offsetUnits:TimeUnit): number {
//   let ratio = 1
//   switch (offsetUnits) {
//     case 's':
//       ratio = MILLISECONDS_IN_SECOND
//       break
//     case 'm':
//       ratio = MILLISECONDS_IN_MINUTE
//       break
//     case 'h':
//       ratio = MILLISECONDS_IN_HOUR
//       break
//     case 'd':
//       ratio = MILLISECONDS_IN_HOUR * HOURS_IN_DAY
//       break
//     case 'w':
//       ratio = MILLISECONDS_IN_HOUR * HOURS_IN_DAY * DAYS_IN_WEEK
//       break
//     case 'M':
//       ratio = MILLISECONDS_IN_HOUR * HOURS_IN_DAY * DAYS_IN_WEEK * WEEKS_IN_MONTH
//       break
//     case 'y':
//       ratio = MILLISECONDS_IN_HOUR * HOURS_IN_DAY * DAYS_IN_WEEK * WEEKS_IN_MONTH * MONTHS_IN_YEAR
//       break
//   }
//   const difference = offsetInMilliseconds(inputDate) / ratio

//   return difference > 0 ? Math.floor(difference) : Math.ceil(difference)
// }
