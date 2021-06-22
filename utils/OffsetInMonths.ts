import { currentDate } from './Constants'
import toDate from './toDate'

export function offsetInMonths (
  inputDate: Date
): number {
  const dateToCompare = toDate(inputDate)

  const monthDiff = currentDate.getMonth() - dateToCompare.getMonth()

  return monthDiff
}
