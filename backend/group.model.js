'use strict';

import mongoose from 'mongoose';

var GroupSchema = new mongoose.Schema({
  name: String,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
		ref: 'Group'
  },
  ancestors: [{
    type: mongoose.Schema.Types.ObjectId,
		ref: 'Group'
  }]
});

export default mongoose.model('Group', GroupSchema);