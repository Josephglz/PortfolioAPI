const express = require('express')
const router = express.Router()
const db = require('../../database/models/User')
router.use(express.json());

router.post('/api/test', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Hello world!'
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
})

module.exports = router