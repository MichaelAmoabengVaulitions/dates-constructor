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

  const endOfDesiredMonth = new Date(date.getTime())
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0)
  const daysInMonth = endOfDesiredMonth.getDate()
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth
  } else {
    date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    )
    return date
  }
}
