const { identifiers } = require('../database/Databases')

const item = {}

item.addIdentifier = async (req, res) => {
  try {
    const { nomComplet, sexe, dateLieu, tel, mail, address } = req.body
    const data = await identifiers.create({
      nomComplet,
      sexe,
      dateLieu,
      tel,
      mail,
      address,
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

item.findAllIdentifiers = async (req, res) => {
  try {
    const data = await identifiers.findAll()
    if (data) {
      return res.status(200).json({ msg: `List de citoyens`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateIdentifiers = async (req, res) => {
  try {
    const id = req.params.id
    const { nomComplet, sexe, dateLieu, tel, mail, address } = req.body
    const data = await identifiers.update(
      { nomComplet, sexe, dateLieu, tel, mail, address },
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
item.deleteIdentifiers = async (req, res) => {
  try {
    const id = req.params.id
    const data = await identifiers.destroy({ where: { code: id } })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res
        .status(400)
        .json({ msg: `Suppression echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

module.exports = item
