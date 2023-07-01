const Topic = require("../models/topics")
const HttpError = require("../models/http-error")
const AsynceHandler = require("express-async-handler")


exports.createTodo = AsynceHandler(async(req, res, next)=>{
  const { title, content } = req.body
  await Topic.create({title, content})
  res.status(200).json({
    message:"Created successful"
  })
})

exports.getTodos = AsynceHandler(async(req, res, next)=>{
  res.status(200).json({
    message:"successful",
    topics: await Topic.find({})
  })
})

exports.getTodo = AsynceHandler(async(req, res, next)=>{
  res.status(200).json({
    message:"successful",
    topics: await Topic.findById(req.params.id)
  })
})

exports.updateTodo = AsynceHandler(async(req, res, next)=>{
  const { title, content } = req.body
  const id = req.params.id
  await Topic.findByIdAndUpdate(id, {title, content})
  res.status(200).json({
    message:"Updated successful"
  })
})

exports.deleteTodo = AsynceHandler(async(req, res, next)=>{
  const id = req.params.id
  await Topic.findByIdAndDelete(id)
  res.status(200).json({
    message:"Deleted successful"
  })
})

