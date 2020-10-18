
const Friend = require('../models/Friend')

module.exports.getAll = async function(req, res) {
    try{
        const friends = await Friend.find({user: +req.body.user})
        res.status(200).json(friends)
    }catch(e){
        console.log(e.message)
    }
}

module.exports.getById = async function(req, res) {  
    try{
        const friends = await Friend.find({
            user: +req.body.user,
            friend_id: +req.params.id
        })
        res.status(200).json(friends[0])
    }catch(e){
        console.log("Can't get friend")
    }
}

module.exports.remove = async function(req, res) {  
    try {
        const candidate = await Friend.remove({
            friend_id: +req.body.friend_id,
            user: +req.body.user           
        })
        res.status(200).json({
            message: 'deleted'
        })
    } catch(e){
        console.log("Can't remove")
    }
    //Делаем сдвиг всех айдишников, хотя не принципиально.
}

module.exports.create = async function(req, res) {  

    const friend = new Friend({
        friend_id: +req.body.friend_id,
        f_name: req.body.f_name,
        s_name: req.body.s_name,
        date: req.body.date,
        user: +req.body.user,
    })
    try{
        await friend.save()
        res.status(201).json(friend)
    }catch(e){
        console.log("Can't create")
    }
}

module.exports.update = async function(req, res) {

    try{
        const friend = await Friend.findOneAndUpdate({
                friend_id: +req.params.id,
                user: +req.body.user         
            },
            {$set: req.body},       // Вот эта штука пока не работает
            {new: true}
        )
        res.status(200).json(friend)
    }catch(e){
        console.log(e.message)
    }
}