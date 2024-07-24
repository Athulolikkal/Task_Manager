import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { modalStyle } from './style';

const TaskView = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant='contained' onClick={handleOpen} size="small" sx={{ fontSize: "10px" }}>View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={() => alert('Save action')}>Save</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default TaskView