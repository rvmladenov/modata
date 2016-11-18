var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Cpu = require('../models/cpu');

router.get('/', function (req, res, next) {
    Cpu.find()
        
        
        
        
        .populate('user', 'firstName')/*TODO: reference to user table - remove it if not needed */



        .exec(function (err, cpus) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: cpus
            });
        });
});

// Use this middleware to define the authentication section

//TODO: may not be needed here in this app but leave it here for now anyway :)
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    //TODO: implement this
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    //TODO: implement this
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    //TODO: implement this
});

module.exports = router;