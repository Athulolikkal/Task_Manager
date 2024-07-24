import { Box, Card, InputBase, MenuItem, Select, Typography } from '@mui/material'

interface Props {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}

const SearchBAr: React.FC<Props> = ({ setSearchValue, setSortValue }) => {
    const menuValues = [{ showName: "Recent", value: -1 }, { showName: "Oldest", value: 1 }]
    return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ marginRight: '0.5rem' }}>
                        Search:
                    </Typography>
                    <InputBase placeholder="Search..."
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
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
                    <Select defaultValue={-1} onChange={(e) => {
                        if (e.target.value === 1) {
                            setSortValue(1)
                        } else {
                            setSortValue(-1)
                        }
                    }
                    }>
                        {
                            menuValues.map((value) => (
                                <MenuItem value={value.value}>{value.showName}</MenuItem>
                            ))
                        }

                    </Select>

                </Box>
            </Card>
        </div>
    )
}

export default SearchBAr