import { currentDate, HOURS_IN_DAY } from './Constants'
import toDate from './toDate'

export function offsetInDays (
  inputDate: Date
): number {
  const dateToCompare = toDate(inputDate)

  return Math.round((currentDate.getHours() - dateToCompare.getHours()) / HOURS_IN_DAY)
}
