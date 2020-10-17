const Friend = require('../models/Friend')

module.exports.getAll = function(req, res) {

}

module.exports.getById = function(req, res) {

}

module.exports.remove = function(req, res) {

}

module.exports.create = async function(req, res) {

    const friend = new Friend({
        f_name: req.body.f_name,
        s_name: req.body.s_name,
    })
    try{
        await friend.save()
        res.status(201).json(friend)
    }catch(e){
        console.log("something wrong!")
    }
}

module.exports.update = function(req, res) {

}

