import numeral from 'numeral'

export const formatNumber = num => {
  if (!num) {
    return 0
  }
  return numeral(Number(num)).format()
}
