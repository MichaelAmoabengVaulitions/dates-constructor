
import toDate from './toDate'
import { toInteger } from './toInteger'

export default function addDays (
  inputDate: Date | number,
  offset: number
): Date {
  const date = toDate(inputDate)
  const amount = toInteger(offset)
  if (isNaN(amount)) {
    return new Date(NaN)
  }
  if (!amount) {
    return date
  }
  date.setDate(date.getDate() + amount)
  return date
}
