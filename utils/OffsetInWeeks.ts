import { currentDate, MILLISECONDS_IN_WEEK } from './Constants'
import toDate from './toDate'

export function offsetInWeeks (
  inputDate: Date
): number {
  const dateToCompare = toDate(inputDate)

  return Math.round((currentDate.getTime() - dateToCompare.getTime()) / MILLISECONDS_IN_WEEK)
}
