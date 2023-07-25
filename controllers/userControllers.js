const Doctor=require('../models/doctor');
const Patient=require('../models/patient');

module.exports.registerDoctor= async(req,res,next)=>{
    try {
        const doctor= await Doctor.create(req.body);

        res.status(200).json({
            success:true,
            message:'doctor created successfully'
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Could not create a doctor,Internal server error'
        })
    }
}

module.exports.registerPatient= async(req,res,next)=>{
    try {
        req.body.doctor="64be7b391ecd9bdd3540365e";
        const patient= await Patient.create(req.body);

        res.status(200).json({
            success:true,
            message:'patient created successfully'
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Could not create a patient,Internal server error'
        })
    }
}

module.exports.createReport= async(req,res,next)=>{
    try {
        const patient= await Patient.findById(req.params.id);
        req.body.date=Date.now();
        patient.reports.push(req.body);
        patient.save();

        res.status(200).json({
            success:true,
            message:'report submitted successfully'
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Could not create a report,Internal server error'
        })
    }
}

module.exports.all_Report= async(req,res,next)=>{
    try {
        const patient= await Patient.findById(req.params.id);
        
        res.status(200).json({
            success:true,
            reports:patient.reports
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Could not able to fetch the patient report'
        })
    }
}

module.exports.AllReports= async(req,res,next)=>{
    try {
        const patient= await Patient.find({
            reports:{$elemMatch:{status:req.params.status} },
        });
        
        res.status(200).json({
            success:true,
            data:patient,
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Could not able to fetch the reports'
        })
    }
}


