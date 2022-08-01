const { agents } = require('../database/Databases')

const item = {}

item.addagents = async (req, res) => {
  try {
    const { nom, postnom, prenom, contact, email, matricule } = req.body
    const data = await agents.create({
      nom:nom,
      postnom:postnom,
      prenom:prenom,
      contact:contact,
      email:email,
      matricule:matricule,
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

item.findAllagents = async (req, res) => {
  try {
    const data = await agents.findAll()
    if (data) {
      return res.status(200).json({ msg: `List`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateagents = async (req, res) => {
  try {
    const id = req.params.id
    const { nom, postnom, prenom, contact, email, matricule } = req.body
    const data = await agents.update(
      {   nom:nom,
        postnom:postnom,
        prenom:prenom,
        contact:contact,
        email:email,
        matricule:matricule,},
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
item.deleteagents = async (req, res) => {
  try {
    const id = req.params.id
    const data = await agents.destroy({ where: { code: id } })
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

module.exports = item
