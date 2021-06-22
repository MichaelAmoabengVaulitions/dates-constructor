import { currentDate } from './Constants'
import toDate from './toDate'

export function offsetInYears (
  inputDate: Date
): number {
  const dateToCompare = toDate(inputDate)

  return currentDate.getFullYear() - dateToCompare.getFullYear()
}
