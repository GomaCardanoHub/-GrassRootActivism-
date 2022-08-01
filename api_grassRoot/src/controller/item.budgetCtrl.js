const { budget } = require('../database/Databases')

const item = {}

item.addbudget = async (req, res) => {
  try {
    const { montant, codeEvenement } = req.body
    const data = await budget.create({
      montant: montant,
      codeEvenement: codeEvenement,
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

item.findAllbudget = async (req, res) => {
  try {
    const data = await budget.findAll()
    if (data) {
      return res.status(200).json({ msg: `List de citoyens`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updatebudget = async (req, res) => {
  try {
    const id = req.params.id
    const { designation, descrignation } = req.body
    const data = await budget.update(
      {
        montant: montant,
        codeEvenement: codeEvenement,
      },
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
item.deletebudget = async (req, res) => {
  try {
    const id = req.params.id
    const data = await budget.destroy({ where: { code: id } })
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
