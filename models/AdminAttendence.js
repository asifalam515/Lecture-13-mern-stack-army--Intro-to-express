const {model,Schema}=require('mongoose')

const adminAttendenceSchema=new Schema({
timeLimit:Number,
status:String,
createdAt:Date
})

const AdminAttendance=model('AdminAttendance',adminAttendenceSchema)
 module.exports=AdminAttendance

