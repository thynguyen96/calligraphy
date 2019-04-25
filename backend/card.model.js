const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Card = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
});

module.exports = mongoose.model('Card', Card);
