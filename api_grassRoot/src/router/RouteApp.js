const express = require('express');
const even = require('../controller/item.evenementCtrl');
const participant = require('../controller/item.participantCtrl');
const participer = require('../controller/item.participerCtrl');
const zone = require('../controller/item.zone');
const router = express.Router();

router.post('/evenement/add', even.addEvenement);//Add evenement 
router.get('/evenement/find', even.findEvenement);// find evenement
router.post('/evenement/delete/:code', even.deleteEvenement);//delete evenement
router.post('/evenement/update/:code', even.updateEvenement);//update evenement

router.post('/participant/add', participant.addParticipant);//
router.get('/participant/find', participant.findAllParticipant);//
router.post('/participant/update/:id', participant.updateParticipant);//
router.post('/participant/delete/:id',participant.deleteParticipant);//

router.post('/participer/add', participer.addParticiper);//
// router.get('/participer/find', participer.);//
router.post('/participer/update/:code', participer.updateParticiper);//
router.post('/participer/delete/:code', participer.deleteParticiper);//

router.post('/zone/add', zone.addZone);//
router.get('/zone/find', zone.findZone);//
router.post('/zone/update/:code', zone.updateZone);//
router.post('/zone/delete/:code', zone.deleteZone);//


module.exports=router;