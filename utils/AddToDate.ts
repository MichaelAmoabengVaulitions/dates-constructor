import addDays from './AddDays'
import addHours from './AddHours'
import addMinutes from './AddMinutes'
import addMonths from './AddMonths'
import addSeconds from './AddSeconds'
import addWeeks from './AddWeeks'
import addYears from './AddYears'

export type TimeUnit = 'y' | 'M' | 'd' | 'h' | 'm' | 's' | 'w'

export default function addToDate (date: Date, offset: number, unit: TimeUnit) {
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
