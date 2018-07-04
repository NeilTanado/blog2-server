const mongoose = require('mongoose');
const Schema = mongoose.Schema


let articleSchema = mongoose.Schema({
  title: String,
  author: {type:Schema.Types.ObjectId,ref:'user'},
  text: String
})

let Article = mongoose.model('article',articleSchema);



module.exports = Article
