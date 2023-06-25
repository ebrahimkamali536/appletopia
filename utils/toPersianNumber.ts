export function toPersianNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return parseInt(n)
    .toLocaleString()
    .toString()
    .replace(/\d/g, (x) => farsiDigits[x]);
}
