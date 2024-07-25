/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material'
import React from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../redux/user_slice';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isUser = useSelector((state: any) => state.userInfo.userId)
    return (
        <>
            <Box sx={{ backgroundColor: 'blue', width: "100%", height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ margin: '10px' }}>
                    <ContentPasteIcon sx={{ color: 'white' }} />
                </Box>
                {!isUser ? (<Box sx={{ margin: '10px' }}>
                    <Button sx={{ color: 'white', marginRight: '10px' }} onClick={() => navigate('/signin')}>
                        Login
                    </Button>
                    <Button variant='contained' sx={{
                        color: 'blue',
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                    }}
                        onClick={() => navigate('/signup')}
                    >
                        Signup
                    </Button>
                </Box>) :
                    (
                        <Button onClick={() => {
                            dispatch(userLogout())
                            localStorage.removeItem('userIdTM')
                            navigate('/signin')
                        }} variant='contained' sx={{
                            color: 'white', backgroundColor: 'red', margin: '10px', '&:hover': {
                                backgroundColor: 'red'
                            }
                        }}>
                            Logout
                        </Button>
                    )
                }
            </Box>
            <Box>
                {children}
            </Box>
        </>
    )
}

export default Layout