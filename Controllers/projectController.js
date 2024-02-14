const projects=require('../Models/projectModel')

//add project
exports.addProject=async(req,res)=>{
   console.log("Inside Add Project API");
   const userId=req.payload
   const {title,languages,overview,github,website}=req.body
   const projectImage=req.file.filename
   console.log(title,languages,overview,github,website,projectImage,userId);
  ///to check project 
  try{
   const existingProject=await projects.findOne({github})   
   
   if(existingProject){
       res.status(406).json("Project Repository is already exist...Please upload another!!!")
   }else{
       //add project
       const newProject=new projects({
           title,languages,overview,github,website,projectImage,userId
       })
       await newProject.save()
       res.status(200).json(newProject)
   }
}
  catch(err){
   res.status(401).json(err)
  }
}

//get home project

exports.getHomeProject=async(req,res)=>{
    try{
        const homeProjects=await projects.find().limit(3)
        res.status(200).json(homeProjects)
    }catch(err){
    res.status(400).json(err);
}
}

//get all project

exports.getAllProject=async(req,res)=>{
    const searchkey=req.query.search
    const query={
        languages:{
            $regex:searchkey,$options:"i"
        }
    }
    try{
        const allProjects=await projects.find(query)
        res.status(200).json(allProjects)
    }catch(err){
    res.status(400).json(err);
}
}

//get user project

exports.getUserProject=async(req,res)=>{
    const userId=req.payload
    try{
        const userProjects=await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
    res.status(400).json(err);
}
}

//edit project
exports.editProject=async(req,res)=>{
    console.log("Inside edit project");
    const{pid}=req.params
    const userId=req.payload
    const {title,languages,overview,github,website,projectImage}=req.body
    const uploadImage=req.file?req.file.filename:projectImage
    try{
   const updatedProject=await projects.findByIdAndUpdate({_id:pid},{
    title,languages,overview,github,website,projectImage:uploadImage,userId
   },{new:true})
   await updatedProject.save()
   res.status(200).json(updatedProject)
    }catch(err){
   res.status(401).json(err)
    }
}


//remove project
exports.removePoject=async(req,res)=>{
    console.log("Inside remove project");
    const {pid}=req.params
    try{
        const projectDetails=await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(projectDetails)
    }catch(err){
           res.status(401).json(err)
    }
}

