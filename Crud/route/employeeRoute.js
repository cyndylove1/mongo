const express = require('express')
const router = express.Router()
const {getEmployee ,postEmployee,updateEmployee,deleteEmployee} = require('../controllers/goalcontroller')

router.get('/' , getEmployee);
router.post('/' , postEmployee,);
router.put('/:id' , updateEmployee,);
router.delete('/:id' , deleteEmployee,);

module.exports = router