/* eslint-disable no-unused-vars */
export const MILLISECONDS_IN_SECOND = 1000

export const MILLISECONDS_IN_MINUTE = 60000

export const MILLISECONDS_IN_HOUR = 3600000

export const DAYS_IN_WEEK = 7

export const DAYS_IN_MONTH = 31

export const MONTHS_IN_YEAR = 12

export const TIME_UNITS = ['y', 'M', 'd', 'h', 'm', 's', 'w']

export enum Operators {
  add = '+',
  subtract = '-',
  roundToNearest = '/'
}

export const OPERATORS = [Operators.add, Operators.subtract, Operators.roundToNearest]
