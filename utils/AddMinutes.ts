import addMilliseconds from './AddMilliseconds'
import { MILLISECONDS_IN_MINUTE } from './Constants'
import { toInteger } from './toInteger'

export default function addMinutes (
  inputDate: Date | number,
  offset: number
): Date {
  const amount = toInteger(offset)
  return addMilliseconds(inputDate, amount * MILLISECONDS_IN_MINUTE)
}
