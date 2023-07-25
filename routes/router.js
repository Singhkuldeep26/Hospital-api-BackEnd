const express =require('express');
const { registerDoctor, registerPatient, createReport, all_Report, AllReports } = require('../controllers/userControllers');

const router=express.Router();

router.post('/doctors/register',registerDoctor);
router.post('/patients/register',registerPatient);
router.post('/patients/:id/create_report',createReport);
router.get('/patients/:id/all_report',all_Report);
router.get('/reports/:status',AllReports);

module.exports=router;