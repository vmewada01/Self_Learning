const { authentication } = require("../Middlewares/Authenetication");
const { Feed } = require("../Modals/Feed");
const { User } = require("../Modals/UserModal");
const { Router } = require("express");
const multer  = require('multer')
const userRouter = Router();

userRouter.get("/", authentication, async (req, res) => {
  const { _id } = req.body;
  //console.log(_id)
  const user = await User.findOne({ _id });

  if (user) {
    res.send(user);
  } else {
    res.send({ msg: "user not found" });
  }
});

userRouter.get("/feed", authentication, (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  try {
    const feed = Feed.findOne({ _id });
    res.send(feed);
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "please make a post " });
  }
});

userRouter.post("/feed", authentication, uploads.singe("image") ,async (req, res) => {
  const { title, _id, image, description, tags, userId } = req.body;

  try {
    const feed = new Feed({
      title,
      userId: _id,
      image,
      description,
      tags,
    });
    await feed.save();
    res.send({ msg: "post made Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "something went wrong, please try after sometimes" });
  }
});

module.exports = { userRouter };
