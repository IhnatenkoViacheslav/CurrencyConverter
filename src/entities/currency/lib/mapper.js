export function mapCurrencyRatesToLabelValue(rates) {
  return Object.keys(rates).map((currency) => {
    return { value: currency, label: currency };
  });
}
