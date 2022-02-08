import { Vector, rotate, subtract, setMagnitude } from './vector'

interface Edge {
  from: Vector
  to: Vector
  length: number
}

interface Circle {
  radius: number
  center: Vector
}

// Given a depth & radius, return circles
export const createFlower = (
  radius: number,
  depth: number,
  origin: Vector = [0, 0],
): Circle[] => {
  const circles: Circle[] = [{ radius, center: origin }]
  if (depth === 0) return circles
  for (let i = 0; i <= depth; i++) {
    const count = i * 6
    const distance = i * radius
  }
  return circles
}

const createFlowerRing = (
  hexRadius: number,
  hexDepth: number,
  origin: Vector,
): Vector[] => {
  const points: Vector[] = []
  const subdivisions = Math.pow(2, hexDepth - 1)
  // Draw 6 segments of a hexagon
  // Subvidivided, based on depth
  for (let i = 0; i < 6; i++) {
    // Start straight north of origin
    const north: Vector = [origin[0], origin[1] + hexRadius]
    // Rotate for each slice of hexagon
    const first = rotate(north, origin, i * 60)
    points.push(first)
    // Handle subdivisions
    if (subdivisions > 0) {
      // Get vector from first point to origin
      const v1 = subtract(origin, first)
      // Rotate vector to point along hexagon perimeter
      const v2 = rotate(v1, first, 60)
      // Scale vector by number of subdivisions
      const v3 = setMagnitude(v2, hexRadius / subdivisions)
      for (let j = 0; j < subdivisions; j++) {}
    }
  }
  return points
}

// Given circles, return intersection points
export const findIntersections = (circles: Circle[]): Vector[] => {
  // find intersections between each pair of circles
  // de-dupe overlapping intersections (fudge factor?)
}

// Given intersection points, return all lines
export const findEdges = (points: Vector[]): Edge[] => {
  // find edges between all pairs of points
  // also, measure their length (Math.hypot)
}

// Given all lines, return lines by length
