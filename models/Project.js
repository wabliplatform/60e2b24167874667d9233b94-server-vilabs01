
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
Underscoreid:String , 

title:String , 

startdate:String , 

grantagreement:String , 

abstract:String , 

enddate:String 


})

module.exports = {
  Project : mongoose.model('Project', projectSchema),
}

