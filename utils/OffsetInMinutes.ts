import { currentDate } from './Constants'
import toDate from './toDate'

export function offsetInMinutes (inputDate: Date): number {
  const dateRight = toDate(inputDate)

  return Math.round((currentDate.getMinutes() - dateRight.getMinutes()))
}
