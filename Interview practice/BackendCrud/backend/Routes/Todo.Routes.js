const { Router } = require("express");
const { todoModel } = require("../modals/TodoModal");

const todoRouter = Router();

todoRouter.get("/", async(req, res) => {
  
    const user = await todoModel.find()
    console.log(user);
    try {
      if (user) {
        res.send({ user });
      } else {
        res.send({ message: "create post first" });
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "something went wrong" });
    }


});

todoRouter.post("/create", async (req, res) => {
  try {
    const todo = new todoModel({ ...req.body });
    await todo.save();
    res.send({ message: "Created Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ message: "something went wrong" });
  }
});

todoRouter.delete("/:id",  async (req, res) => {
    const { id } = req.params;
    //   console.log(email)
    // console.log(id)
    const user = await todoModel.findOne({ _id: id });
    //console.log(user);
    try {
      if (user) {
        await todoModel.deleteOne({ _id: id });
  
        res.send({ message: "deleted succefully" });
      } else {
        res.send({ message: "create post first" });
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "something went wrong" });
    }
  });

  todoRouter.patch("/:id",  async (req, res) => {
    const { id } = req.params;
    const updated_object = req.body;
    //   console.log(email)
   // console.log(id)
    const user = await todoModel.findByIdAndUpdate({_id: id} , {$set: updated_object});
    //console.log(user);
    try {
      if (user) {
       //  await  userModel.update({_id: id} , {$set: updated_object});
  
        res.send({ message: "updated succefully" });
      } else {
        res.send({ message: "create post first" });
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "something went wrong" });
    }
  });

  module.exports = {todoRouter}