const HttpError = require("../models/http-error")

const getTodos = (req, res, next)=>{
  try{
    res.status(200).json({result:"Todo all records"})
  }catch(error){
    return next(
      new HttpError ('อ่านข้อมูลจาก server ไม่ได้', 404)
    )
  }
}

module.exports = {
  getTodos
}