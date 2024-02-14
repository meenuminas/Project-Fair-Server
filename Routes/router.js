const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router=new express.Router()

//register api
router.post('/register',userController.register)
//logo
router.post('/login',userController.login)


///add project api-router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get HOME project
router.get('/gethomeproject',projectController.getHomeProject)

//get all project
router.get('/getallprojects',jwtMiddleware,projectController.getAllProject)

///get user project
router.get('/getuserprojects',jwtMiddleware,projectController.getUserProject)

//update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removePoject)
//update project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)



//exporting router
module.exports=router