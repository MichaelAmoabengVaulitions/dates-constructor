export default function transformTimeDifference (difference: number) {
  if (difference === 0) {
    return '+0'
  }
  if (difference > 0) {
    return `+${difference}`
  }
  return difference
}
