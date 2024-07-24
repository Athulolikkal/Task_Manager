/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, FormControl, InputBase, Typography, FormHelperText } from '@mui/material';
import { inputTagStyle } from './style';
import { IFormInput } from '../../type';
import { userSignup } from '../../api/user';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async data => {
        await userSignup(data)
    };
    const password = watch('password');

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <Box sx={{ marginTop: '2rem' }}>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'blue' }} gutterBottom>
                        Signup
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '400px',
                        padding: '2rem',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        border: '1px solid blue',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth margin="normal">
                            <InputBase
                                placeholder="First Name"
                                {...register('firstName', {
                                    required: 'First Name is required',
                                    pattern: {
                                        value: /^[^\s].*$/,
                                        message: 'First Name cannot start with a space',
                                    },
                                })}
                                sx={inputTagStyle}
                            />
                            {errors.firstName && <FormHelperText error>{errors.firstName.message}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputBase
                                placeholder="Last Name"
                                {...register('lastName', {
                                    required: 'Last Name is required',
                                    pattern: {
                                        value: /^[^\s].*$/,
                                        message: 'Last Name cannot start with a space',
                                    },
                                })}
                                sx={inputTagStyle}
                            />
                            {errors.lastName && <FormHelperText error>{errors.lastName.message}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputBase
                                placeholder="Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: 'Enter a valid email',
                                    },
                                })}
                                sx={inputTagStyle}
                            />
                            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputBase
                                placeholder="Password"
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                                sx={inputTagStyle}
                            />
                            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputBase
                                placeholder="Confirm Password"
                                type="password"
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: value => value === password || 'Passwords do not match',
                                })}
                                sx={inputTagStyle}
                            />
                            {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>}
                        </FormControl>
                        <Button type="submit" variant="contained" fullWidth>
                            Signup
                        </Button>
                    </form>
                </Box>
            </Box>

        </Box>
    );
};

export default SignUp;
