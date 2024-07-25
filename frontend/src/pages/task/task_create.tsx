/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { modalStyle } from "./style";
import { addTask } from "../../api/task";

interface Props {
  getAllTasks: () => Promise<void>;
}
const TaskCreate: React.FC<Props> = ({ getAllTasks }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setErrors({});
  };

  const handleSave = async () => {
    const newErrors: any = {};

    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const userId = localStorage.getItem("userIdTM");
    if (userId) {
      const addTaskResponse = await addTask({ title, description, userId });
      console.log(addTaskResponse, "add task respone");
    }

    handleClose();
    await getAllTasks();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ marginBottom: "1rem" }}
      >
        Add Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Task
          </Typography>
          <Box sx={{ width: "100%", marginTop: "1rem" }}>
            <FormControl sx={{ width: "100%", mb: 2 }} error={!!errors.title}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ width: "100%" }}
              />
              {errors.title && <FormHelperText>{errors.title}</FormHelperText>}
            </FormControl>
            <FormControl sx={{ width: "100%" }} error={!!errors.description}>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ width: "100%" }}
              />
              {errors.description && (
                <FormHelperText>{errors.description}</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ mr: 1 }}
            >
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TaskCreate;
