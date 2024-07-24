import { Box, Card, InputBase, MenuItem, Select, Typography } from '@mui/material'


const SearchBAr = () => {
    const menuValues = ["Recent", "Oldest", "Popular"]
    return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ marginRight: '0.5rem' }}>
                        Search:
                    </Typography>
                    <InputBase placeholder="Search..."
                        sx={{
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            width: '300px',
                            height: '40px'
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ marginRight: '0.5rem' }}>
                        Sort By:
                    </Typography>
                    <Select defaultValue="recent">
                        {
                            menuValues.map((value) => (
                                <MenuItem value={value.toLowerCase()}>{value}</MenuItem>
                            ))
                        }


                    </Select>

                </Box>
            </Card>
        </div>
    )
}

export default SearchBAr