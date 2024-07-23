import { Box, Button, Typography } from "@mui/material";

const ItemBox = () => {
  return (
    <Box sx={{ background: "#add3ff", padding: "1rem", marginTop: "5px" }}>
      <Typography>Task 3</Typography>
      <Typography>description 3</Typography>
      <Typography sx={{marginTop:'1rem'}} variant={'body2'}>created at:0/09/2024, 05:30:00</Typography>
      <Box sx={{marginTop:'1rem',display:'flex',justifyContent:'end',gap:'5px'}}>
        <Button variant="contained" sx={{backgroundColor:'red',fontSize:'10px',}} size="small">Delete</Button>
        <Button variant="contained" size="small" sx={{fontSize:'10px'}}>Edit</Button>
        <Button variant="contained" size="small" sx={{fontSize:'10px'}}>View Details</Button>
      </Box>
    </Box>
  );
};

export default ItemBox;
