import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { modalStyle } from "./style";
import { ITaskDetails } from "../../type";
import { formatDateTimeToIST } from "../../helper/isoDateConvert";
interface Props {
  itemDetails: ITaskDetails;
}
const TaskView: React.FC<Props> = ({ itemDetails }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const newDate = formatDateTimeToIST(itemDetails.created_at);
  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        size="small"
        sx={{ fontSize: "10px" }}
      >
        View Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Task Details
          </Typography>

          <Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Title:{itemDetails.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              description:{itemDetails.description}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              created at:{newDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TaskView;
