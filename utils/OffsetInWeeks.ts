import { currentDate } from './Constants'
import toDate from './toDate'

export function offsetInWeeks (
  inputDate: Date
): number {
  const MILLISECONDS_IN_WEEK = 604800000

  const dateToCompare = toDate(inputDate)

  return Math.round((currentDate.getTime() - dateToCompare.getTime()) / MILLISECONDS_IN_WEEK)
}
