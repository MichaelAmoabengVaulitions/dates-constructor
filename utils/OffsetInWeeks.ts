import { currentDate, HOURS_IN_WEEK } from './Constants'
import toDate from './toDate'

export function offsetInWeeks (inputDate: Date): number {
  const dateToCompare = toDate(inputDate)

  return Math.round((currentDate.getHours() - dateToCompare.getHours()) / HOURS_IN_WEEK)
}
