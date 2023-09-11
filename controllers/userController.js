'use strict';

const userData = require('../data/users');
const roleData = require('../data/roles');
const cfg = require('../dbconfig');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res, next) => {
    try{
        const users = await userData.getUsers();
        res.send(users);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const createUser = async (req, res, next) => {
    try{
        const users = await userData.createUser(req.body);
        res.send(users);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const verifyLogin = async (req, res, next) => {
    try{
        let user = await userData.verifyLogin(req.body);
        for(let u of user){
            u.roles = [];
            if(u.vlogin){
                if(u.vlogin=="Y" && u.user_id){
                    let uroles = await roleData.getRoles(u.user_id);
                    let payload = { subject: u._id };
                    console.log('signing: '+u.username + '||' + cfg.secret_key);
                    console.log('logging in: '+u.vlogin);
                    u.token = jwt.sign(payload, u.username + '||' + cfg.secret_key);
                    for(let i = 0; i < uroles.length; i++){
                        u.roles.push(uroles[i].rolename);
                    }
                }
            }else{
                u.vlogin = 'N';
            }
        }
        res.send(user[0]);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const verifyLoggedIn = async (req, res, next) => {
    try{
        let token = req.headers.authorization.split(' ')[1];
        let uname = req.headers.authorization.split(' ')[2];
        console.log('verifying: '+uname + '||' + cfg.secret_key);
        let payload = jwt.verify(token, uname + '||' + cfg.secret_key);
        let user = await userData.getUserByUname(uname);
        for(let u of user){
            u.roles = [];
            if(!u.username){
                u.username = uname;
                u.vlogin = 'N';
                console.log('no username');
            }
            if(u.vlogin){
                if(u.vlogin=="Y" && u.user_id){
                    let uroles = await roleData.getRoles(u.user_id);
                    for(let i = 0; i < uroles.length; i++){
                        u.roles.push(uroles[i].rolename);
                    }
                }
            }else{
                u.vlogin = 'N';
                console.log('invalid user');
            }
            if(!req.headers.authorization){
                u.vlogin = 'N';
                console.log('no token header');
            }
            if(!token || token === 'null'){
                u.vlogin = 'N';
                console.log('no token');
            }
            if(!payload){
                u.vlogin = 'N';
                console.log('no payload');
            }
        }
        res.send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];
    let uname = req.headers.authorization.split(' ')[2];
    if(token || token === 'null'){
        return res.status(401).send('Unauthorized Request');
    }
    let payload = jwt.verify(token, uname + '||' + cfg.secret_key);
    if(!payload){
        return res.status(401).send('Unauthorized Request');
    }
    next();
}

module.exports = {
    getUsers,
    verifyLogin,
    verifyToken,
    verifyLoggedIn,
    createUser
}