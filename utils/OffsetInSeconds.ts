import { currentDate } from './Constants'
import toDate from './toDate'

export default function offsetInSeconds (inputDate: Date): number {
  const dateRight = toDate(inputDate)

  return Math.round((currentDate.getSeconds() - dateRight.getSeconds()))
}
