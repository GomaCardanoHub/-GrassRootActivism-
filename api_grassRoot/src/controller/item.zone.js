const { where } = require('sequelize/types')
const { zone } = require('../database/Databases')
const item = {}
item.addZone = async (req, res) => {
  try {
    const { designation, long, lat } = req.body
    const data = await zone.create({
      designation: designation,
      long: long,
      lat: lat,
    })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateZone = async (req, res) => {
  try {
    const code = req.params.code
    const { designation, long, lat } = req.body
    const data = await zone.update(
      {
        designation: designation,
        long: long,
        lat: lat,
      },
      { where: { code: code } },
    )
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.deleteZone = async (req, res) => {
  try {
    const code = req.params.code
    const data = await zone.destroy({
      where: { code: code },
    })
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

item.findZone = async (req, res) => {
  try {
    const data = await zone.findAll()
    if (data) {
      return res.status(200).json({ msg: `List zones`, data: data })
    } else {
      return res.status(200).json({ msg: `List is empty`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

module.exports = item