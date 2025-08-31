const Note = require("../models/note.model");

const addNotes = async (req, res) => {
  try {
    const { title, content, tag, isPinned } = req.body;
    const { user } = req.user;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    // Debug: Log what's in req.user
    console.log("req.user:", req.user);
    console.log("req.user.user:", req.user.user);

    const newNote = new Note({
      title,
      content,
      tag,
      isPinned,
      user: user._id,
    });
    await newNote.save();

    res
      .status(201)
      .json({ error: null, message: "Note added successfully", note: newNote });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error adding note", message: error.message });
  }
};

const editNotes = async (req, res) => {
  const noteId = req.params.noteId;
  const { title, content, tag, isPinned } = req.body;
  const { user } = req.user;

  if (!title && !content && !tag) {
    return res.status(400).json({
      error: true,
      message: "No changes provided",
    });
  }

  try {
    const note = await Note.findOne({ _id: noteId, user: user._id });

    if (!note) {
      return res
        .status(400)
        .json({ error: true, message: "Note not found", user: user._id });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tag) note.tag = tag;
    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.status(201).json({
      error: false,
      note,
      message: "Note updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal server Error",
    });
  }
};

const getNotes = async (req, res) => {
  const { user } = req.user;

  try {
    const notes = await Note.find({ user: user._id }).sort({ isPinned: -1 });
    return res.status(200).json({
      error: false,
      notes,
      message: "All notes received successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

const deleteNotes = async (req, res) => {
  const noteId = req.params.noteId;
  const { user } = req.user;

  try {
    const note = await Note.findOne({ _id: noteId, user: user._id });
    if (!note) {
      return res.status(400).json({
        error: true,
        message: "Note does not fount",
      });
    }
    await Note.deleteOne({ _id: noteId, user: user._id });

    return res.status(200).json({
      error: false,
      message: "Note deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

const isPinned = async (req, res) => {
  const noteId = req.params.noteId;
  const { isPinned } = req.body;
  const { user } = req.user;

  try {
    const note = await Note.findOne({ _id: noteId, user: user._id });

    if (!note) {
      return res
        .status(400)
        .json({ error: true, message: "Note not found", user: user._id });
    }

    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.status(201).json({
      error: null,
      note,
      message: "isPinned Updated",
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addNotes,
  editNotes,
  getNotes,
  deleteNotes,
  isPinned,
};
