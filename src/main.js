import {loadData} from './loadData.js'
import {sort} from './quickSort.js'

export async function runChallenge() {

  // 1 - Extract
  let numbers = await loadData()

  if (!numbers) {
    console.log("Could not load API!")
  } else if (numbers.length) {
    // 2 - Transform
    numbers = sort(numbers)
    return numbers
  } else {
    console.log("Numbers were empty on API!")
  }
  return []

}