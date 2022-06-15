const { participer } = require('../database/Databases')
const item = {}

item.addParticiper = async (req, res) => {
  try {
    const { date, type, montant } = req.body
    const data = await participer.create({ date, type, montant })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(200).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}
item.updateParticipant = async (req, res) => {
  try {
    const code = req.params.id
    const { date, type, montant } = req.body
    const data = await participer.update(
      { date: date, type: type, montant: montant },
      { where: { code: code } },
    )
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modication reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Modification`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}
item.deleteParticiper = async (req, res) => {
  try {
    const code = req.params.code
    const data = await participer.destroy({ where: { code: code } })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res.status(404).json({ msg: `Suppression echoue` })
    }
  } catch (error) {
    return res.status(500).json({ msg: error })
    ß
  }
}
module.exports = item
