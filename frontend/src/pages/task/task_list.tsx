import { Box, } from "@mui/material";
import ItemContainer from "../../components/task/item_container";
import { ITaskDetails } from "../../type";
import { useState } from "react";
import { allTasks } from "../../data/taskDataTesting";
import SearchBAr from "../../components/searchBar/search_bar";
import TaskCreate from "./task_create";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITaskDetails[]>(allTasks);

  const statusItems = ["TODO", "IN PROGRESS", "DONE"]
  // when droping an item, changing the status of that item
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
      <Box>
        {/* Creating Task */}
        <TaskCreate />
        {/* search bar */}
        <SearchBAr />
        {/* each coloumns */}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {statusItems.map((item: string) => (
            <div
              id={item}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, item)}
            >
              <ItemContainer title={item} tasks={tasks} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
