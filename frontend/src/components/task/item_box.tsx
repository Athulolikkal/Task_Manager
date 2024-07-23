import { Box, Button, Typography } from "@mui/material";
import { ITaskDetails } from "../../type";

interface Props {
  itemDetails: ITaskDetails;
}
const ItemBox: React.FC<Props> = ({ itemDetails }) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: number
  ) => {
    e.dataTransfer.setData("text", taskId.toString());
  };
  const handleDragEnd = (
    e: React.DragEvent<HTMLDivElement>,
  ) => {
    e.dataTransfer.clearData()
  };
  return (
    <Box
      key={itemDetails.number}
      draggable
      onDragStart={(e) => handleDragStart(e, itemDetails.number)}
      onDragEnd={handleDragEnd}
      sx={{ background: "#bfe9f5", padding: "1rem", marginTop: "5px" }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        Task {itemDetails.number}
      </Typography>
      <Typography>{itemDetails.description}</Typography>
      <Typography sx={{ marginTop: "1rem" }} variant={"body2"}>
        {itemDetails.date}
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
        >
          Delete
        </Button>
        <Button variant="contained" size="small" sx={{ fontSize: "10px" }}>
          Edit
        </Button>
        <Button variant="contained" size="small" sx={{ fontSize: "10px" }}>
          View Details
        </Button>
      </Box>
    </Box>
  );
};

export default ItemBox;
