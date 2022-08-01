const { users } = require('../database/Databases')
const jwt = require('../util/token.helper')
const hash = require('bcrypt')
const pwd = require('../util/hash.password')
const item = {}

item.addusers = async (req, res) => {
  try {
    const { username, password, codeAgent } = req.body
    const pssword = await pwd.encryptPassword(password)
    const data = await users.create({
      username: username,
      password: pssword,
      codeAgent: codeAgent,
    })

    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res
        .status(400)
        .json({ msg: `Enregistrement reussi avec succes`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.findAllusers = async (req, res) => {
  try {
    const data = await users.findAll()
    if (data) {
      return res.status(200).json({ msg: `List`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateusers = async (req, res) => {
  try {
    const id = req.params.id
    const { username, password, codeAgent } = req.body
    const data = await users.update(
      { username: username, password: password, codeAgent: codeAgent },
      { where: { code: id } },
    )
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modication reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Modication echouer`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}
item.deleteusers = async (req, res) => {
  try {
    const id = req.params.id
    const data = await users.destroy({ where: { code: id } })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Suppression echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}


item.authenticateUser = async(req, res) => {
    try {
        const { username, password } = req.body;
        const data = await users.findOne({ where: { username: username } });
        if (data) {
            const status = await hash.compare(password, data.password);
            if (status) {
                const token = jwt.generateToken({ id: data.code, username: username });
            return    res.status(200).json({ msg: `succes`, data: data, token: token });
            } else {
                return res.status(401).json({ msg: `password incorrect`, data: {}, token: "NO" });
            }
        } else {
           return res.status(401).json({ msg: `Invalid username`, data: {}, token: "NO" });
        }
    } catch (e) { 
      return  res.status(401).json({ msg: e, data: {}, token: "NO" });
    }
    } 

module.exports = item
