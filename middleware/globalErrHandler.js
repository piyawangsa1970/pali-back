// ดักจับ err 
const globalErrHandler = ((err, req, res, next)=>{
	const statck = err.statck ? err.statck: ''
	const message = err.message ? err.message: ''
	const status = err.status ? err.status : "failed"  //ถ้าไม่มี err.status ก็กำหนดให้เป็น "failed"
	const statusCode = err.statusCode ? err.statusCode : 500  
	res.status(statusCode).json({
		status,
		message,
		statck,
	})
})
// เมื่อ req url ไม่มี
const notFoundErr = (req, res, next)=>{
	const err = new Error(`Cant't find ${req.originalUrl} on the server`)
	next(err)
}

module.exports = {globalErrHandler, notFoundErr}
