 const mongoose = require("mongoose")


const FeedSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  tags: [String],
  userId: String,
});

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = { Feed };
