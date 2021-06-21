import addDays from './AddDays'
import { DAYS_IN_WEEK } from './Constants'
import { toInteger } from './toInteger'

export default function addWeeks (
  inputDate: Date | number,
  offset: number
): Date {
  const amount = toInteger(offset)
  const days = amount * DAYS_IN_WEEK
  return addDays(inputDate, days)
}
