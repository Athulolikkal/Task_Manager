import { Box, Button, Typography } from "@mui/material";
import { ITaskDetails } from "../../type";
import TaskEdit from "../../pages/task/task_edit";
import TaskView from "../../pages/task/task_view";
import { removeTask } from "../../api/task";
import { formatDateTimeToIST } from "../../helper/isoDateConvert";

interface Props {
  itemDetails: ITaskDetails;
  getAllTasks: () => Promise<void>;
}
const ItemBox: React.FC<Props> = ({ itemDetails, getAllTasks }) => {
  const handleDelete = async (Id: string) => {
    await removeTask(Id);
    await getAllTasks();
  };
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) => {
    e.dataTransfer.setData("text", taskId);
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
  };
  return (
    <Box
      key={itemDetails._id}
      draggable
      onDragStart={(e) => handleDragStart(e, itemDetails._id)}
      onDragEnd={handleDragEnd}
      sx={{ background: "#bfe9f5", padding: "1rem", marginTop: "5px" }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{itemDetails.title}</Typography>
      <Typography>{itemDetails.description}</Typography>
      <Typography sx={{ marginTop: "1rem" }} variant={"body2"}>
        {formatDateTimeToIST(itemDetails.created_at)}
      </Typography>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "end",
          gap: "5px",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", fontSize: "10px" }}
          size="small"
          onClick={() => handleDelete(itemDetails._id)}
        >
          Delete
        </Button>
        <TaskEdit itemDetails={itemDetails} getAllTasks={getAllTasks} />
        <TaskView itemDetails={itemDetails} />
      </Box>
    </Box>
  );
};

export default ItemBox;
