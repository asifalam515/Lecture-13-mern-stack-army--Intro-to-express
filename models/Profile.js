const {model,Schema}=require('mongoose')

const profileSchema=({
    firstName:String,
    lastName:String,
    phone:String,
    avatar:String,
    user:{    user:Schema.Types.ObjectId
    },
    ref:'User'

})

const Profile=model('User',profileSchema)
module.exports=Profile

