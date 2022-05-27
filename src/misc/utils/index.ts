export const getSplittedKey = <T extends object = {[key: string]: any}>(key: string, obj: T, divider = '.') => {
  const keyArrays = key.split(divider)

  return obj[keyArrays[0]][keyArrays[1]]
}