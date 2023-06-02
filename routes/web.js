const express = require('express')
const router = express.Router()
const db = require('../database/controller')
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        res.render('index')
        let data = (await db.User.getAll())
        console.log(data);
    } catch (error) {
        console.log(error);
        res.render('index')
    }
})

router.get('*', async (req, res) => {
    try {
        res.render('404')
    } catch (error) {
        console.log(error);
        res.render('404')
    }
})

module.exports = router