/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  Typography,
  FormHelperText,
  Link,
} from "@mui/material";
import { inputTagStyle } from "./style";
import { IFormInput } from "../../type";
import { userSignup } from "../../api/user";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const userAdd = await userSignup(data);
    if (userAdd.status) {
      navigate("/");
    } else {
      window.alert(userAdd.message);
    }
  };
  const password = watch("password");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box sx={{ marginTop: "2rem" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "blue" }}
            gutterBottom
          >
            Signup
          </Typography>
        </Box>

        <Box
          sx={{
            width: "400px",
            padding: "2rem",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid blue",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth margin="normal">
              <InputBase
                placeholder="First Name"
                {...register("firstName", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[^\s].*$/,
                    message: "First Name cannot start with a space",
                  },
                })}
                sx={inputTagStyle}
              />
              {errors.firstName && (
                <FormHelperText error>
                  {errors.firstName.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputBase
                placeholder="Last Name"
                {...register("lastName", {
                  required: "Last Name is required",
                  pattern: {
                    value: /^[^\s].*$/,
                    message: "Last Name cannot start with a space",
                  },
                })}
                sx={inputTagStyle}
              />
              {errors.lastName && (
                <FormHelperText error>{errors.lastName.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputBase
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email",
                  },
                })}
                sx={inputTagStyle}
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputBase
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                sx={inputTagStyle}
              />
              {errors.password && (
                <FormHelperText error>{errors.password.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputBase
                placeholder="Confirm Password"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                sx={inputTagStyle}
              />
              {errors.confirmPassword && (
                <FormHelperText error>
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </FormControl>

            <Button type="submit" variant="contained" fullWidth>
              Signup
            </Button>
          </form>
          <Box sx={{ paddingTop: "1rem" }}>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/signin"
                sx={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
