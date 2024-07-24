import { Box, Button, FormControl, Input, InputLabel, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { modalStyle } from './style';
import { ITaskDetails } from '../../type';
import { updateTask } from '../../api/task';

interface Props {
    itemDetails: ITaskDetails;
    getAllTasks: () => Promise<void>;
}

const TaskEdit: React.FC<Props> = ({ itemDetails, getAllTasks }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [titleValue, setTitleValue] = useState<string>(itemDetails.title);
    const [descriptionValue, setDescriptionValue] = useState<string>(itemDetails.description);
    const [titleError, setTitleError] = useState<string | null>(null);
    const [descriptionError, setDescriptionError] = useState<string | null>(null);

    const handleSave = async () => {
        // Reset errors
        setTitleError(null);
        setDescriptionError(null);

        // Validate inputs
        if (titleValue.trim() === '') {
            setTitleError('Title is required');
            return;
        }
        if (descriptionValue.trim() === '') {
            setDescriptionError('Description is required');
            return;
        }

        // Perform save action (e.g., call an API to update the task)
        try {
            const response = await updateTask({ ...itemDetails, title: titleValue, description: descriptionValue });
            if (response.success) {
                // Close modal and refresh task list
                handleClose();
                getAllTasks();
            } else {
                // Handle error response
                console.error('Failed to update task', response.message);
            }
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    return (
        <>
            <Button variant='contained' onClick={handleOpen} size="small" sx={{ fontSize: "10px" }}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Task Edit
                    </Typography>
                    <Box sx={{ width: '100%', marginTop: '1rem' }}>
                        <FormControl sx={{ width: '100%', mb: 2 }} error={!!titleError}>
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <Input
                                value={titleValue}
                                onChange={(e) => setTitleValue(e.target.value)}
                                id="title"
                                name="title"
                                sx={{ width: '100%' }}
                            />
                            {titleError && <Typography color="error">{titleError}</Typography>}
                        </FormControl>
                        <FormControl sx={{ width: '100%' }} error={!!descriptionError}>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input
                                value={descriptionValue}
                                onChange={(e) => setDescriptionValue(e.target.value)}
                                id="description"
                                name="description"
                                sx={{ width: '100%' }}
                            />
                            {descriptionError && <Typography color="error">{descriptionError}</Typography>}
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default TaskEdit;
