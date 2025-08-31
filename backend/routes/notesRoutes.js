const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utilities");
const {
  addNotes,
  editNotes,
  getNotes,
  deleteNotes,
  isPinned,
} = require("../controllers/notesController");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Notes App API" });
});

router.post("/addnotes", authenticateToken, addNotes);
router.put("/editnotes/:noteId", authenticateToken, editNotes);
router.get("/getnotes", authenticateToken, getNotes);
router.delete("/deletenotes/:noteId", authenticateToken, deleteNotes)
router.put("/ispinned/:noteId",authenticateToken, isPinned)

module.exports = router;
