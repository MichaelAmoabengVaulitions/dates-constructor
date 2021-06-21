export const toInteger = (numberToRound?: number): number => {
  if (!numberToRound) {
    return NaN
  }

  const convertedNumber = Number(numberToRound)

  return convertedNumber
}
