import { Box } from "@mui/material";
import ItemContainer from "../../components/task/item_container";

const TaskList = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <ItemContainer title={"TODO"} />
        <ItemContainer title={"IN PROGRESS"} />
        <ItemContainer title={"DONE"} />
      </Box>
    </>
  );
};

export default TaskList;
