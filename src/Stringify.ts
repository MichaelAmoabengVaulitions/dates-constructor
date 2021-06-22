import { offsetInDays } from '../utils/OffsetInDays'
import { offsetInHours } from '../utils/OffsetInHours'
import { offsetInMinutes } from '../utils/OffsetInMinutes'
import { offsetInMonths } from '../utils/OffsetInMonths'
import offsetInSeconds from '../utils/OffsetInSeconds'
import { offsetInWeeks } from '../utils/OffsetInWeeks'
import { offsetInYears } from '../utils/OffsetInYears'
import transformTimeDifference from '../utils/TransformTimeDifference'

export default function stringify (date: Date): string {
  const differenceInYears = offsetInYears(date) * -1
  const differenceInMonths = offsetInMonths(date) * -1
  const differenceInWeeks = offsetInWeeks(date) * -1
  const differenceInDays = offsetInDays(date) * -1
  const differenceInHours = offsetInHours(date) * -1
  const differenceInMinutes = offsetInMinutes(date) * -1
  const differenceInSeconds = offsetInSeconds(date) * -1

  const stringFromDate =
        `now${transformTimeDifference(differenceInYears)}y${transformTimeDifference(differenceInMonths)}M${transformTimeDifference(differenceInWeeks)}w${transformTimeDifference(differenceInDays)}d${transformTimeDifference(differenceInHours)}h${transformTimeDifference(differenceInMinutes)}m${transformTimeDifference(differenceInSeconds)}s`
  console.log(stringFromDate)
  return stringFromDate
}
