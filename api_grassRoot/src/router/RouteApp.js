const express = require('express');
const even = require('../controller/item.evenementCtrl');
const participant = require('../controller/item.participantCtrl');
const participer = require('../controller/item.participerCtrl');
const zone = require('../controller/item.zone');
const budget = require('../controller/item.budgetCtrl');
const organization = require('../controller/item.organisationsCtrl');
const login = require('../controller/item.userCtrl');
const agent = require('../controller/item.agentCtrl');
const { generateToken,verifyToken}=require('../util/token.helper');
const router = express.Router();
// Router pour le evenement
router.post('/evenement/add',verifyToken, even.addEvenement);//Add evenement 
router.get('/evenement/find',verifyToken, even.findEvenement);// find evenement
router.post('/evenement/delete/:code',verifyToken, even.deleteEvenement);//delete evenement
router.post('/evenement/update/:code',verifyToken, even.updateEvenement);//update evenement
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
router.post('/budget/add', verifyToken,budget.addbudget);//
router.get('/budget/find',verifyToken, budget.findAllbudget);//
router.post('/budget/update/:id',verifyToken, budget.updatebudget);//
router.post('/budget/delete/:id',verifyToken, budget.deletebudget);//

// Router pour le organisation 
router.post('/organization/add', organization.addorganisation);//
router.get('/organization/find', organization.findAllorganisation);//
router.post('/organization/update/:id', organization.updateorganisation);//
router.post('/organization/delete/:id', organization.deleteorganisation);//

// Router pour le login 
router.post('/login/add', login.addusers);//
router.get('/login/find', login.findAllusers);//
router.post('/login/update/:id', login.updateusers);//
router.post('/login/delete/:id', login.deleteusers);//
router.post('/login/auth/', login.authenticateUser);//



// Router pour le agent 
router.post('/agent/add', agent.addagents);//
router.get('/agent/find',verifyToken ,agent.findAllagents);//
router.post('/agent/update/:id', agent.updateagents);//
router.post('/agent/delete/:id', agent.deleteagents);//


module.exports=router;