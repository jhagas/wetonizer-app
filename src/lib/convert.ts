export function convertFormat(date: Date) {
  return date.toISOString().split("T")[0];
}
