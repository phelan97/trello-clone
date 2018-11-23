const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const listSchema = new mongoose.Schema({
  title: {type: String, required: true},
  cards: [{type: ObjectId, ref: 'Card'}],
  boardId: {type: ObjectId, ref: 'Board', required: true},
  userId: {type: ObjectId, ref: 'User', required: true}
});

listSchema.set('toObject', {
  versionKey: false,
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    return result;
  }
});

module.exports = mongoose.model('List', listSchema);