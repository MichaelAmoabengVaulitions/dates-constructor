import addMilliseconds from './AddMilliseconds'
import { MILLISECONDS_IN_SECOND } from './Constants'
import { toInteger } from './toInteger'

export default function addSeconds (
  inputDate: Date | number,
  offset: number
): Date {
  const amount = toInteger(offset)
  return addMilliseconds(inputDate, amount * MILLISECONDS_IN_SECOND)
}
