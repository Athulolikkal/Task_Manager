import { Box } from "@mui/material";
import ItemContainer from "../../components/task/item_container";
import { ITaskDetails } from "../../type";
import { useState } from "react";
import { allTasks } from "../../data/taskDataTesting";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITaskDetails[]>(allTasks);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.number === parseInt(taskId) ? { ...task, status } : task
      )
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <div
          id="TODO"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "TODO")}
        >
          <ItemContainer title={"TODO"} tasks={tasks} />
        </div>
        <div
          id="IN PROGRESS"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "IN PROGRESS")}
        >
          <ItemContainer title={"IN PROGRESS"} tasks={tasks} />
        </div>
        <div
          id="DONE"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "DONE")}
        >
          <ItemContainer title={"DONE"} tasks={tasks} />
        </div>
      </Box>
    </>
  );
};

export default TaskList;
