import { error } from "console";
import fetch from "node-fetch"

const NUMBERS_URL = "http://challenge.dienekes.com.br/api/numbers"
let numbers = undefined

// Function to handle errors on the response object
function handleResponseErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// Function to handle errors on the response data object
function handleDataError(error = undefined, page, error_sequence) {
    const errorMsg = `${ error.message || "Error fetching the data" } (on page ${page}).`
    console.log(errorMsg)

    if (error_sequence <= 3) {
        // it will try more times on the same page (max:3)
        console.log("Retrying...")
        return getNumbers(page, error_sequence + 1)
    }
    // Error getting the data from same page after 3 attempts. One approach would be to show an error message and abort all the 
    // fetching operations (setting numbers variable to null or empty and stoping the recursion, i.e., no return)
    // however, in order to be able to continue the challenge, just an error message will be shown without aborting the operations.

    //console.log("3 Failed attemps on the same page - Aborting!!!")
    return getNumbers(page + 1)
}

// Function to get numbers from a specific page
async function getNumbers(page = 1, error_sequence = 0) {
    /*Uncomment and edit this to limit the number of pages loaded*/
    //if(page>10) { return numbers; }
    
    // Creating the promise
    const fetchData = fetch(`${NUMBERS_URL}?page=${page}`)
        .then(handleResponseErrors)
        .then(response => response.json())
        .catch(error => handleDataError(error, page, error_sequence))

    // Resolving the promise
    return await fetchData.then(data => {
        if (data?.numbers) {
            if (data.numbers.length) {

                // Initialize the array if it's undefined
                if (!numbers) {
                    numbers = []
                }
                
                numbers.push(...data.numbers)

                return getNumbers(page + 1)
            } else {
                return numbers;
            }
        } else {
            handleDataError(data?.error, page, error_sequence)
        }
    })
}

export async function loadData() {
    const nums = await getNumbers()
    return nums
}

export const exportedForTesting = {
    handleResponseErrors
}