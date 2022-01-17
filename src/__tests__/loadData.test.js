import { loadData, exportedForTesting } from '../loadData.js'

describe("test data loading [LoadData()]", () => {
    test('It should load some data', async () => {
        const result = await loadData()
        expect(result).not.toBeUndefined()
    })
})

describe("test OK response from API [handleResponse()]", () => {
    test('It should return the OK response', () => {

        const { handleResponseErrors } = exportedForTesting;

        const mockedResponse  = { "ok" : true, "status" : 200 , "statusText" : "Good Response!" }
        const result = handleResponseErrors(mockedResponse)
        expect(result).toEqual(mockedResponse)
    })
})

describe("test Bad response from API [handleResponse()]", () => {
    test('It should throw an error of type Error', () => {
        const { handleResponseErrors } = exportedForTesting;

        const mockedResponse  = { "ok" : false, "status" : 500 , "statusText" : "Bad Response!" }
        expect(() => {
            handleResponseErrors(mockedResponse)
        }).toThrow(Error)
    })
})