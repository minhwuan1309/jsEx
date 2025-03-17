const router = require('express').Router()
const Category = require('../schemas/category')

const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(async function(req, res) {
    const categories = await Category.find({})
    res.status(200).send({
        success: true,
        data: categories
    })
}))

router.get('/:id', asyncHandler(async function(req, res) {
    const id = req.params.id
    const category = await Category.findById(id)
    res.status(200).send({
        success: true,
        data: category
    })
}))

router.post('/', asyncHandler(async function(req, res) {
    const { name, description } = req.body
    const newCategory = new Category({ name, description })
    await newCategory.save()
    res.status(201).json({ success: true, data: newCategory })
}))

router.put('/:id', asyncHandler(async function(req, res) {
    const id = req.params.id
    const category = await Category.findById(id)
    if (category) {
        const { name, description } = req.body
        category.name = name
        category.description = description
        await category.save()
        res.status(200).json({ success: true, data: category })
    } else {
        res.status(404).json({ success: false, message: 'Category not found' })
    }
}))

router.delete('/:id', asyncHandler(async function(req, res) {
    const id = req.params.id
    const category = await Category.findById(id)
    if (category) {
        category.isDeleted = true
        await category.save()
        res.status(200).json({ success: true, data: category })
    } else {
        res.status(404).json({ success: false, message: 'Category not found' })
    }
}))

module.exports= router