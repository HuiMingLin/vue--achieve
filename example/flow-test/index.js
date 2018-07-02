/*@flow*/

function split (str) {
  return str.split(' ')
}
split(11)

function add (x, y) {
  return x + y
}
add ('Hello', 11)

function add (x: number, y: number) {
  return x + y
}
add ('Hello', 11)

var arr: Array<number> = [1, 2, 3]
arr.push('Hello')
