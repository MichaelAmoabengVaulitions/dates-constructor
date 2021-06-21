import addMilliseconds from './AddMilliseconds'
import { MILLISECONDS_IN_HOUR } from './Constants'
import { toInteger } from './toInteger'

export default function addHours (
  inputDate: Date | number,
  offset: number
): Date {
  const amount = toInteger(offset)
  return addMilliseconds(inputDate, amount * MILLISECONDS_IN_HOUR)
}
