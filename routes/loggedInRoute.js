const express = require('express');
const loggedInRoute = express.Router();

loggedInRoute.get('/protected', (req,res, next) => {
    try{
        res.json({
            user: req.user, 
            message: 'AUTHENTICATED!'});
    }
    catch (e) {
        consol.log(e.message);
    }
});




module.exports =  { loggedInRoute };