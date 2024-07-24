import { Axios } from "../axios/config";
import { IFormInput } from "../type";

export const userSignup = async (data: IFormInput) => {
  try {
    console.log(data, "user data is this");
    const addUser = await Axios.post("/auth/signup", data);
    console.log(addUser, "add user is this");
  } catch (err) {
    console.log(err, "error is thisd");
  }
};
