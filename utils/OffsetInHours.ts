import { currentDate } from './Constants'
import toDate from './toDate'

export function offsetInHours (inputDate: Date): number {
  const dateToCompare = toDate(inputDate)

  return Math.round((currentDate.getHours() - dateToCompare.getHours()))
}
