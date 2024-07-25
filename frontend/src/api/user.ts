import { Axios } from "../axios/config";
import { IFormInput, IFormLoginInput } from "../type";

export const userSignup = async (data: IFormInput) => {
  try {
    console.log(data, "user data is this");
    const addUser = await Axios.post("/auth/signup", data);
    console.log(addUser, "add user is this");
    if (addUser.data.error) {
      return { status: false, message: addUser.data.message };
    } else {
      localStorage.setItem("userIdTM", addUser.data.userDetails._id);
      return { status: true, message: "success" };
    }
  } catch (err) {
    console.log(err, "error is thisd");
    return { status: false, message: "something went wrong" };
  }
};
export const userSignin = async (data: IFormLoginInput) => {
  try {
    console.log(data, "user data is this");
    const loginUser = await Axios.post("/auth/signin", data);
    if (loginUser.data.error) {
      return { status: false, message: loginUser.data.message };
    } else {
      // localStorage.setItem("userIdTM", loginUser.data.userId);
      return { status: true, message: loginUser.data.message,userId:loginUser.data.userId };
    }
  } catch (err) {
    console.log(err, "error is thisd");
    return { status: false, message: "something went wrong" };
  }
};
