import express from "express"
import {runChallenge} from './main.js'

// 3 - Load

const PAGE_SIZE = 100

const numbers = await runChallenge()
const app = express()

app.listen(3000, () => {
 console.log("Server running on port 3000");
})

app.get("/result", (req, res, next) => {

    // Use pagination to show data.
    const page = req?.query?.page || 1

    const start = (page - 1) * PAGE_SIZE
    const end = page * PAGE_SIZE

    res.json(numbers.slice(start, end))
})