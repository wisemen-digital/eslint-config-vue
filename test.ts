const objectWantedToSort = {
  a: 2,
  b: 3,
  c: 1,
}

console.warn(Object.keys(objectWantedToSort).sort()) // [ 'a', 'b', 'c' ]

// make enum
enum Direction {
  Up = 1,
  Down = 4,
  Lef = 2,
  Right,
}

console.warn(Direction.Up) // 1
