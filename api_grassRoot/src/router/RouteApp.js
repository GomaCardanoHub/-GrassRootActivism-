const express = require('express');
const even = require('../controller/item.evenementCtrl');
const participant = require('../controller/item.participantCtrl');
const participer = require('../controller/item.participerCtrl');
const zone = require('../controller/item.zone');
const budget = require('../controller/item.budgetCtrl');
const organization = require('../controller/item.organisationsCtrl');
const router = express.Router();
// Router pour le evenement
router.post('/evenement/add', even.addEvenement);//Add evenement 
router.get('/evenement/find', even.findEvenement);// find evenement
router.post('/evenement/delete/:code', even.deleteEvenement);//delete evenement
router.post('/evenement/update/:code', even.updateEvenement);//update evenement
// Router pour le participant 
router.post('/participant/add', participant.addParticipant);//
router.get('/participant/find', participant.findAllParticipant);//
router.post('/participant/update/:id', participant.updateParticipant);//
router.post('/participant/delete/:id',participant.deleteParticipant);//
// Router pour le participer 
router.post('/participer/add', participer.addParticiper);//
// router.get('/participer/find', participer.);//
router.post('/participer/update/:code', participer.updateParticiper);//
router.post('/participer/delete/:code', participer.deleteParticiper);//
// Router pour le zone 
router.post('/zone/add', zone.addZone);//
router.get('/zone/find', zone.findZone);//
router.post('/zone/update/:code', zone.updateZone);//
router.post('/zone/delete/:code', zone.deleteZone);//

// Router pour le budget 
router.post('/budget/add', budget.addbudget);//
router.get('/budget/find', budget.findAllbudget);//
router.post('/budget/update/:id', budget.updatebudget);//
router.post('/budget/delete/:id', budget.deletebudget);//

// Router pour le organisation 
router.post('/organization/add', organization.addorganisation);//
router.get('/organization/find', organization.findAllorganisation);//
router.post('/organization/update/:code', organization.updateorganisation);//
router.post('/organization/delete/:code', organization.deleteorganisation);//


module.exports=router;