

const bcrypt = require('bcrypt');

const item={};
item.hashPassword = async function (password) {
    const pwd = await bcrypt.hash(password, 12);
    return pwd;
}

item.variable=async function(index){
    
}
item. encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

  item.compare=async(req,res)=>{
    const status= await bcrypt.compare(req.password);
    if(!status){
      res.status(403).json({msg:`password incorrect`})
    }
  }

  module.exports  =item