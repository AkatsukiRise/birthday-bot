
const Friend = require('../models/Friend')

module.exports.getAll = async function(msg) {
    console.log(msg.from.id)
    try{
        const friends = await Friend.find({user: msg.from.id})
        console.log(friends)
    }catch(e){
        console.log(e)
    }
}

module.exports.getById = async function(msg) {  
    try{
        
        const friends = await Friend.find({
            user: msg.from.id,
            friend_id: +req.params.id
        })
        return 
    }catch(e){
        console.log("Can't get friend")
    }
}

module.exports.remove = async function(msg) {  
    try {
        const candidate = await Friend.remove({
            friend_id: +req.body.friend_id,
            user: msg.from.id           
        })
        return {
            message: "deleted"
        }
    } catch(e){
        console.log("Can't remove")
    }
    //Делаем сдвиг всех айдишников, хотя не принципиально.
}

module.exports.create = async function(msg) {  

    const friend = new Friend({
        friend_id: +req.body.friend_id,
        f_name: req.body.f_name,
        s_name: req.body.s_name,
        date: req.body.date,
        user: msg.from.id,
    })
    try{
        await friend.save()
        return friend
    }catch(e){
        console.log("Can't create")
    }
}

module.exports.update = async function(msg) {

    try{
        const friend = await Friend.findOneAndUpdate({
                friend_id: friend_id,
                user: msg.from.id       
            },
            {$set: req.body},       // Вот эта штука пока не работает
            {new: true}
        )
        return friend
    }catch(e){
        console.log(e.message)
    }
}