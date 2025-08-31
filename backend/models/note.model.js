const mongoose = require("mongoose");
const User = require("./user.model");
const schema = mongoose.Schema;

const noteSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag : {
    type: [String],
    default: []
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
