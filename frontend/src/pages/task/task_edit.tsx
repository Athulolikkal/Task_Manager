import { Box, Button, FormControl, Input, InputLabel, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { modalStyle } from './style';

const TaskEdit = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <InputLabel htmlFor="title" >Title</InputLabel>
                            <Input id="title" name="title" sx={{ width: '100%' }} />
                        </FormControl>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input id="description" name="description" sx={{ width: '100%' }} />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={() => alert('Save action')}>Save</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default TaskEdit