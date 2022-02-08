export type Vector = [number, number]

type V = Vector

export const rotate = (target: V, origin: V, degrees: number): V => {
  const [x, y] = target
  const [ox, oy] = origin
  const radians = Math.PI / 180 + degrees
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)
  const nx = cos * (x - ox) + sin * (y - oy) + ox
  const ny = cos * (y - oy) - sin * (x - ox) + oy
  return [nx, ny]
}

export const add = (a: V, b: V): V => [a[0] + b[0], a[1] + b[1]]
export const subtract = (a: V, b: V): V => [a[0] - b[0], a[1] - b[1]]
export const multiply = (a: V, b: V): V => [a[0] * b[0], a[1] * b[1]]
export const divide = (a: V, b: V): V => [a[0] / b[0], a[1] / b[1]]

export const getMagnitude = (vector: V): number => {}
export const setMagnitude = (
  point: V,
  target: number,
  current = getMagnitude(point),
): V => {}
