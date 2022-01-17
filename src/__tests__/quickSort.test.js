import { sort } from '../quickSort.js'

describe("Test quicksort result", () => {
    test('It should return an array with the same size', () => {
        const originalArray = [27, 84, 53, 47, 82, 19, 78, 56, 69, 46, 58, 41, 26, 79, 74, 25, 14, 31, 7, 66, 65, 73, 91, 10, 35, 32, 70, 36, 60, 40]
        const sortedArray = sort(originalArray)
        expect(sortedArray).toHaveLength(originalArray.length)
    })

    test('It should return a sorted array', () => {
        const originalArray = [27, 84, 53, 47, 82, 19, 78, 56, 69, 46, 58, 41, 26, 79, 74, 25, 14, 31, 7, 66, 65, 73, 91, 10, 35, 32, 70, 36, 60, 40]
        const expectedArray = [7, 10, 14, 19, 25, 26, 27, 31, 32, 35, 36, 40, 41, 46, 47, 53, 56, 58, 60, 65, 66, 69, 70, 73, 74, 78, 79, 82, 84, 91]
        const sortedArray = sort(originalArray)
        expect(sortedArray).toEqual(expectedArray)
    })
})