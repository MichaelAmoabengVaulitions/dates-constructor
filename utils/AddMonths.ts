import toDate from './toDate'
import { toInteger } from './toInteger'

export default function addMonths (
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
  const dayOfMonth = date.getDate()

  const endOfMonth = new Date(date.getTime())
  endOfMonth.setMonth(date.getMonth() + amount + 1, 0)
  const daysInMonth = endOfMonth.getDate()
  if (dayOfMonth >= daysInMonth) {
    return endOfMonth
  } else {
    date.setFullYear(
      endOfMonth.getFullYear(),
      endOfMonth.getMonth(),
      dayOfMonth
    )
    return date
  }
}
