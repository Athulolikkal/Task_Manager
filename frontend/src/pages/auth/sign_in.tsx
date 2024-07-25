import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  Typography,
  FormHelperText,
} from "@mui/material";
import { inputTagStyle } from "./style";
import { IFormLoginInput } from "../../type";
import { userSignin } from "../../api/user";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginInput>();
  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
    console.log(data);
    const userLoginResponse = await userSignin(data);
    if (userLoginResponse.status) {
      navigate("/");
    } else {
      window.alert(userLoginResponse.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box sx={{ marginTop: "6rem" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "blue" }}
            gutterBottom
          >
            Login
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

            <Button type="submit" variant="contained" fullWidth>
              Signup
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
