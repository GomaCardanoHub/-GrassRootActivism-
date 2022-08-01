const { organisation } = require('../database/Databases')

const item = {}

item.addorganisation = async (req, res) => {
  try {
    const {  code,
      designation,
      descrignation} = req.body
    const data = await organisation.create({
        code:code,
        designation:designation,
        descrignation:descrignation
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

item.findAllorganisation = async (req, res) => {
  try {
    const data = await organisation.findAll()
    if (data) {
      return res.status(200).json({ msg: `List de citoyens`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateorganisation = async (req, res) => {
  try {
    const id = req.params.id
    const { 
        designation,
        descrignation} = req.body
    const data = await organisation.update(
      { 
        designation:designation,
        descrignation:descrignation },
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
item.deleteorganisation = async (req, res) => {
  try {
    const id = req.params.id
    const data = await organisation.destroy({ where: { code: id } })
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
