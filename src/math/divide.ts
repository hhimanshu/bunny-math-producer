export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Can't divide by zero");
  return a / b;
}
