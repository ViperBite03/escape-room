export const getQueryParams = (url: string = '') => {
  if (!url) return

  const parsedUrl = new URL(url)
  const queryParams = {}

  for (let [key, value] of parsedUrl.searchParams.entries()) {
    queryParams[key] = value
  }

  return queryParams
}

export const formatPrice = (x: number | string, symbol: string = '') => {
  if (!x) return

  let value
  let negative = ''

  if (typeof x === 'number') {
    negative = x < 0 ? '-' : ''

    value = x.toString()
  } else {
    value = x
  }

  // Only numbers
  value = value.replace(/\D/g, '')

  // Remove left 0
  if (value.length > 1) value = value.replace(/^0+/, '')

  // Add dots
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Add negative char if needed + symbol
  value = negative + value + (symbol ? ` ${symbol}` : '')

  return value
}

export const currencyToNumber = (currency: string): number => {
  if (!currency) return 0

  return parseInt(currency.replace(/\./, ''))
}

export const slugify = (text: string): string => {
  if (!text) return ''

  return text
    .normalize('NFD') // Normalize to NFD Unicode form
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export const prettyDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('es-ES', { month: 'short' })
  const month = formatter.format(date)

  return `${date.getDate()} ${month} ${date.getFullYear()}`
}

export const capitalize = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
