// Formats
// +
// -
// /

import addDays from './utils/AddDays'
import addHours from './utils/AddHours'
import addMinutes from './utils/AddMinutes'
import addMonths from './utils/AddMonths'
import addWeeks from './utils/AddWeeks'
import addYears from './utils/AddYears'

// DateSlap: y M d h m s w
const timeSlapValues = ['y', 'M', 'd', 'h', 'm', 's', 'w']

  type TimeSlap = 'y' | 'M' | 'd' | 'h' | 'm' | 's' | 'w'

const addSeconds = (date: Date, offset: number) => new Date(date.getTime() + 1000 * offset)

const addToDate = (date: Date, offset: number, unit: TimeSlap) => {
  switch (unit) {
    case 's':
      return addSeconds(date, offset)
    case 'm':
      return addMinutes(date, offset)
    case 'h':
      return addHours(date, offset)
    case 'd':
      return addDays(date, offset)
    case 'w':
      return addWeeks(date, offset)
    case 'M':
      return addMonths(date, offset)
    case 'y':
      return addYears(date, offset)
  }
}

const operators = ['-', '+']

const parse = (dateString: string): Date => {
  const currentDateFromDateString = dateString.includes('now') ? new Date() : null
  if (currentDateFromDateString === null) return new Date() // verify what to return

  const splitBySlash = dateString.split('/')
  console.log('🚀 ~ file: index.ts ~ line 38 ~ parse ~ splitBySlash', splitBySlash)

  const dateWithoutNow = splitBySlash[0].split('now').pop()
  console.log('🚀 ~ file: index.ts ~ line 38 ~ parse ~ dateWithoutNow', dateWithoutNow)

  const dateWithoutNowSplit = dateWithoutNow ? dateWithoutNow.split('') : []
  let operator
  let offset = ''
  let option
  let response = currentDateFromDateString
  for (let i = 0; i < dateWithoutNowSplit.length; i++) {
    console.log('🚀 ~ file: index.ts ~ line 48 ~ parse ~ dateWithoutNowSplit', dateWithoutNowSplit[i])
    if (operators.includes(dateWithoutNowSplit[i])) {
      operator = dateWithoutNowSplit[i] === '+' ? 1 : -1
      continue
    }

    if (!timeSlapValues.includes(dateWithoutNowSplit[i])) {
      offset += dateWithoutNowSplit[i]
      continue
    }

    option = dateWithoutNowSplit[i] as TimeSlap

    if (operator && offset && option) {
      console.log('🚀 ~ file: index.ts ~ line 61 ~ parse ~ operator', operator, offset, option)
      response = addToDate(response, operator * parseInt(offset, 10), option)
      offset = ''
    }
  }

  console.log('🚀 ~ file: index.ts ~ line 94 ~ parse ~ response', currentDateFromDateString, '------->>>>>>', response)

  return response
}

parse('now+1y')
parse('now+1M')
parse('now-1d/y')
parse('now-1M/y')
// parse('now-1w/y')
// parse('now-1h/y')
// parse('now-1m/y')
// parse('now-1s/y')
// parse('now-4d-22m/y')
// parse('now-4d+22m/y')
parse('now-1y-2M-3d-4h-5m-6s/y')
