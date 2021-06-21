export default function toDate (argument: Date | number): Date {
  if (
    argument instanceof Date
  ) {
    return new Date(argument.getTime())
  } else if (typeof argument === 'number') {
    return new Date(argument)
  } else {
    return new Date(NaN)
  }
}
