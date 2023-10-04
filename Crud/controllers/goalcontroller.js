const asyncHandler = require('express-async-handler');
const employee = require('../Models/goalSchema')


const getEmployee = asyncHandler(async( req ,res)=>{
    const employ = await employee.find();
        if(!employ){
           console.log('No employee found');
    
        }
        res.status(200).json(employ)
        
    });
const postEmployee = asyncHandler(async( req ,res)=>{

    if(!req.body.fullname ,!req.body.email ,!req.body.addresss ,!req.body.mobile && !req.body.age){
        res.status(400)
        throw new Error('please add a text field')

    }
    const employ = await employee.create({
        fullname:req.body.fullname,
        email:  req.body.email,
        address: req.body.address,
        mobile: req.body.mobile,
        age: req.body.age

    });
    res.status(200).json(employ)
        
        
    });
const updateEmployee = asyncHandler(async( req ,res)=>{
    const employ = await employee.findById(req.params.id)

    
    if(!employ){
        res.status(400)
        throw new Error('employ not found')
    }
    const updatedemploy = await employee.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedemploy)
    
        
        
    });
const deleteEmployee = asyncHandler(async( req ,res)=>{
    const employ = await employee.findByIdAndRemove(req.params.id)

    
    if(!employ){
        res.status(400)
        throw new Error('employ not found')
    }
    await employee.deleteOne()
    res.status(200).json({id:req.params.id})
    
    
        
        
    });

module.exports = {
    getEmployee, postEmployee,updateEmployee ,deleteEmployee
}