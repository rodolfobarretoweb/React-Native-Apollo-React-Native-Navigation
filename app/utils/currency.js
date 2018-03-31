import 'intl';
import 'intl/locale-data/jsonp/en';

export function formatCurrency({ value, countryCode = 'en', currency = 'USD' }) {
  return new Intl.NumberFormat(countryCode, {
    currency,
    style: 'currency',
    minimumFractionDigits: 2
  }).format(value);
}
