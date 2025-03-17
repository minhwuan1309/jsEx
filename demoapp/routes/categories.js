const router = require('express').Router()
const Category = require('../schemas/category')

const asyncHandler = require('express-async-handler')

router.get('/', async function(req, res, next) {
    let categories = await Category.find({})
    res.status(200).send({
        success:true,
        data:categories
    })
})

module.exports= router