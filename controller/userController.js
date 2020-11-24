const users = require('../models/users')

module.exports = {
    getHome: (req, res, next) => {
        users.find((err, docs) => {
            res.render('home', { "users": docs })
        }).catch(err => {
            console.log('not working');
        })
    },

    addUser: (req, res, next) => {

        const { name, password, city, email } = req.body

        const user = new users({
            name,
            password,
            city,
            email
        })

        user.save((err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('data added successfully')
                res.redirect('/')
            }
        })
    },

    getDataForUpdate: (req, res) => {
        console.log(req.params.id)
        users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
            if (err) {
                console.log("can't find and update")
            } else {
                res.render('update', { "users": docs })
            }
        })
    },
    updateData: (req, res) => {
        console.log(req.params.id)
        users.findOneAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
            if (err) {
                console.log("can't find and update")
            } else {
                res.redirect('/')
            }
        })
    },
    deleteData: (req, res) => {
        users.findOneAndDelete({ _id: req.params.id }, req.body, (err, docs) => {
            if (err) {
                console.log("can't delete data")
            } else {
                console.log("deleted")
                res.redirect('/')
            }
        })
    }
}