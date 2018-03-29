export function formatCurrency({ value, countryCode = 'en', currency = 'USD' }) {
  return new Intl.NumberFormat(countryCode, {
    currency,
    style: 'currency',
    minimumFractionDigits: 2
  }).format(value);
}
