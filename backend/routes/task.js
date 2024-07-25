import express from "express";
import taskController from "../controllers/task_controller.js";

const router = express.Router();
router.post("/add", taskController.addTask);
router.get("/allactivetasks", taskController.allActiveTasks);
router.patch("/remove", taskController.removeTask);
router.patch("/updatestatus", taskController.updateStatus);
router.put("/update", taskController.updateTask);
export default router;
