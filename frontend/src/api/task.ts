/* eslint-disable @typescript-eslint/no-explicit-any */
import { Axios } from "../axios/config";
import { ITaskDetails, ITaskResponse } from "../type";

interface IAddTask {
  title: string;
  description: string;
}
interface IFindTask {
  searchValue?: string;
  sortValue: number;
}
export const addTask = async (data: IAddTask) => {
  try {
    const addTask = await Axios.post("/task/add", data);
    console.log(addTask, "addedTask");
    return addTask;
  } catch (err) {
    console.log(err, "error is thisd");
  }
};

export const getAllActiveTask = async (
  data: IFindTask
): Promise<ITaskResponse> => {
  try {
    const { searchValue, sortValue } = data;
    const response: any = await Axios.get(
      `/task/allactivetasks?sortValue=${sortValue}&item=${searchValue}`
    );
    if (response?.data?.error) {
      return { status: false, tasks: [] };
    } else {
      return { status: true, tasks: response.data.tasks };
    }
  } catch (err) {
    console.log(err, "error is this");
    return { status: false, tasks: [] };
  }
};
export const removeTask = async (taskID: string) => {
  try {
    const response: any = await Axios.patch("/task/remove", { taskID });
    console.log(response, "response");
    if (response?.data?.error) {
      return { status: false };
    } else {
      return { status: true };
    }
  } catch (err) {
    console.log(err, "error is this");
    return { status: false };
  }
};
export const updateTask = async (taskDetails: ITaskDetails) => {
  try {
    const taskId = taskDetails._id;
    const title = taskDetails.title;
    const description = taskDetails.description;
    const response: any = await Axios.put("/task/update", {
      taskId,
      title,
      description,
    });
    console.log(response, "response");
    if (response?.data?.error) {
      return { status: false };
    } else {
      return { status: true };
    }
  } catch (err) {
    console.log(err, "error is this");
    return { status: false };
  }
};
