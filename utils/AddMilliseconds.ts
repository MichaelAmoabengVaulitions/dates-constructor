
import toDate from './toDate'
import { toInteger } from './toInteger'

export default function addMilliseconds (
  inputDate: Date | number,
  offset: number
): Date {
  const timestamp = toDate(inputDate).getTime()
  const amount = toInteger(offset)
  return new Date(timestamp + amount)
}
