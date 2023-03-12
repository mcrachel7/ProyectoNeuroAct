const mongoose = require('mongoose'); 

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, 
          
    },
    description: {
      type: String,
      
    },
    done: {
      type: Boolean,
      default: false,
    },
    id_user: {
      type: {
        type: String
      },
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('tasks', TaskSchema );