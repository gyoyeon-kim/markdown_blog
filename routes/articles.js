const express = require('express')
const router = express.Router()

router.get('/test',(requ, res) => {
    res.send('In articles')
})


module.exports = router