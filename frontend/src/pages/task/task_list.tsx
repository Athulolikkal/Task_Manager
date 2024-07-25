import { Box } from "@mui/material";
import ItemContainer from "../../components/task/item_container";
import { ITaskDetails, ITaskResponse } from "../../type";
import { useEffect, useState } from "react";
import SearchBAr from "../../components/searchBar/search_bar";
import TaskCreate from "./task_create";
import { changeTaskStatus, getAllActiveTask } from "../../api/task";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITaskDetails[]>([]);
  // const [loading, setLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState<number>(-1);

  useEffect(() => {
    getAllTasks();
  }, [sortValue, searchValue]);

  const getAllTasks = async () => {
    const { status, tasks }: ITaskResponse = await getAllActiveTask({
      searchValue,
      sortValue,
    });
    if (status) {
      setTasks(tasks);
    } else {
      setTasks([]);
    }
  };

  const statusItems = ["TODO", "IN PROGRESS", "DONE"];
  // when droping an item, changing the status of that item
  const handleDrop = async (
    e: React.DragEvent<HTMLDivElement>,
    status: string
  ) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    await changeTaskStatus({ taskId, status });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, status } : task
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
        <TaskCreate getAllTasks={getAllTasks} />
        {/* search bar */}
        <SearchBAr
          setSearchValue={setSearchValue}
          setSortValue={setSortValue}
        />
        {/* each coloumns */}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {statusItems.map((item: string) => (
            <div
              id={item}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, item)}
            >
              <ItemContainer
                title={item}
                tasks={tasks}
                getAllTasks={getAllTasks}
              />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
