// import { sign, verify, decode } from 'jsonwebtoken';
// import dotenv from 'dotenv';

// import _ from 'lodash';
const {sign,verify,decode}=require('jsonwebtoken');
const {dotenv}=require('dotenv');
const _=require('lodash');
// dotenv.config();
const JWT_KEY='H@BCIZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const { JWT_EXPIRES_IN_HRS, JWT_KEY } = process.env;
const itemToken={};

/**
 * @param {object} dataToToken
 * @returns {string} token
 * @function
 * @description this function returns the token from data that is passed
 */
itemToken.generateToken = ((id,username) => {
  // const dataToEncrypt = _.omit(dataToToken, 'password');
  const token = sign({id:id,username:username},JWT_KEY, { expiresIn: '30min'});
  return token;
});

/**
 * @param {string} token
 * @return {string} decodedToken
 * @function
 */
 itemToken.verifyToken = (req,res,next) =>{
   const autoHead=req.headers.authorization;
   if(autoHead){
     const token=autoHead.split(" ")[1];
      verify(token, JWT_KEY,(error,user)=>{
        if(error){
          return res.status(403).json({msg:`Token is not valid`,data:{},token:"NO"});
        }
        req.user=user;
        next();
      });
   }else{
     res.status(401).json({msg:`Your not authentificated`,data:{},token:'NO'});
   }
 
 };
/**
 * @param {string} token
 * @return {string} decodedToken
 * @function
 */
 itemToken.decodeToken = token => decode(token, JWT_KEY);

 module.exports=itemToken;