const { evenement } = require('../database/Databases')
const item = {}

item.addEvenement = async (req, res) => {
  try {
    const { title, contenir, dateAdd, codeOrganisation } = req.body
    const data = await evenement.create({
      title: title,
      contenir: contenir,
      dateAdd: dateAdd,
      codeOrganisation: codeOrganisation,
    })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.updateEvenement = async (req, res) => {
  try {
    const code = req.params.code
    const { title, contenir, dateAdd, codeOrganisation } = req.body
    const data = await evenement.update(
      {
        title: title,
        contenir: contenir,
        dateAdd: dateAdd,
        codeOrganisation: codeOrganisation,
      },
      { where: { code: code } },
    )
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modification reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Modification echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.deleteEvenement = async (req, res) => {
  try {
    const data = await evenement.destroy({
      where: { code: req.params.code },
    })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res.status(200).json({ msg: `Suppression echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}
item.findEvenement = async (req, res) => {
  try {
    const data = await evenement.findAll()
    if (data) {
      return res.status(200).json({ msg: `Liste de evenement `, data: data })
    } else {
      return res.status(404).json({ msg: `Not Found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

module.exports =item