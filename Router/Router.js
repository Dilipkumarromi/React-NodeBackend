// const { Router } = require('express')
const Router=require('express').Router()
const Student=require('../Controlllers/StudentRegistrationControllers')

Router.get('/student/list',Student.getAllData)
Router.get('/student/findByid',Student.getfindByid)
Router.post('/student/register',Student.postRegi)
Router.patch('/student/update',Student.studentUpdate)
Router.delete('/student/delete',Student.selectDelete)
Router.get('/student/login',Student.UserLogin)

module.exports=Router