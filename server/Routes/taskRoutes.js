const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const Task = require("../Models/Task");

router.post("/create", authMiddleware, async (req, res) => {
  const { title, content, dueDate, Status } = req.body;

  try {
    const userId = req.user.id;

    const newTask = await Task.create({
      title,
      content,
      dueDate,
      Status,
      createdBy: userId,
    });

    res.status(201).json(newTask);
  } catch (err) {
    console.error("newTask error:", err);
    if (err.code === 11000) {
      return res.status(400).json({ message: "Task title already exists" });
    }
    res.status(500).json({
      message: "Task creation failed",
    });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  const { status, sort } = req.query;

  const query = { createdBy: req.user.id };
  if (status) {
    query.Status = status;
  }

  let findQuery = Task.find(query)
    .select("title content Status dueDate createdAt")
    .lean();

  if (sort === "date") {
    findQuery = findQuery.sort({ createdAt: -1 });
  } else if (sort === "title") {
    findQuery = findQuery.sort({ title: 1 });
  }

  try {
    const tasks = await findQuery.exec();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching tasks",
    });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const getOneTask = await Task.findById(req.params.id).lean();
    if (!getOneTask) return res.status(404).json({ message: "Task not found" });
    res.json(getOneTask);
  } catch (err) {
    console.error("getOneTask error:", err);
    res.status(500).json({ message: "Error fetching task" });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const editTask = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      req.body,
      { new: true }
    );
    if (!editTask) return res.status(404).json({ meaasge: "task not found" });
    res.json(editTask);
  } catch (err) {
    console.error("editTask error:", err);
    res.status(500).json({ message: "Error in updating task" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });
    if (!deleteTask) return res.status(404).json({ meaasge: "task not found" });
    res.json(deleteTask);
  } catch (err) {
    console.error("deleteTask error:", err);
    res.status(500).json({ message: "Error in deleting task" });
  }
});

module.exports = router;
