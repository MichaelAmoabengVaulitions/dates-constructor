import addMonths from './AddMonths'
import { MONTHS_IN_YEAR } from './Constants'
import { toInteger } from './toInteger'

export default function addYears (
  inputDate: Date | number,
  offset: number
): Date {
  const amount = toInteger(offset)
  return addMonths(inputDate, amount * MONTHS_IN_YEAR)
}
