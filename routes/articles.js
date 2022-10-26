const express = require('express')
const router = express.Router()

router.get('/new',(requ, res) => {
    res.render('articles/new')
})


module.exports = router