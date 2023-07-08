const {Ia} =require("../Model/Ia.model")
const {Router} = require("express")

const iaRouter= Router()



iaRouter.get("/", async(req,res)=> {
    const student_data= await Ia.find()
    res.send(student_data)
})

iaRouter.get("/:iaName", async(req,res)=> {
    console.log(req.params.iaName)
    const ia_data = await Ia.find({name:req.params.iaName})
    res.send(ia_data)
})

module.exports ={iaRouter}