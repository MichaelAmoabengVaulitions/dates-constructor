
import addToDate, { TimeUnit } from '../utils/AddToDate'
import { Operators, OPERATORS, TIME_UNITS } from '../utils/Constants'

export const parse = (dateString: string): Date => {
  const currentDateFromDateString = dateString.includes('now') ? new Date() : null
  if (currentDateFromDateString === null) return new Date()

  const splitBySlash = dateString.split(Operators.roundToNearest)

  const dateWithoutNow = splitBySlash[0].split('now').pop()

  const dateWithoutNowSplit = dateWithoutNow ? dateWithoutNow.split('') : []

  let operator
  let offset = ''
  let option
  let response = currentDateFromDateString

  for (let i = 0; i < dateWithoutNowSplit.length; i++) {
    if (OPERATORS.includes(dateWithoutNowSplit[i] as Operators)) {
      operator = dateWithoutNowSplit[i] === Operators.add ? 1 : -1
      continue
    }

    if (!TIME_UNITS.includes(dateWithoutNowSplit[i])) {
      offset += dateWithoutNowSplit[i]
      continue
    }

    option = dateWithoutNowSplit[i] as TimeUnit

    if (operator && offset && option) {
      response = addToDate(response, operator * parseInt(offset, 10), option)
      offset = ''
    }
  }

  console.log('🚀 ~ file: index.ts ~ line 68 ~ parse ~ response', currentDateFromDateString, response)
  return response
}
