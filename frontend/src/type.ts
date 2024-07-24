export interface ITaskDetails {
  description: string;
  status: string;
  _id: string;
  title: string;
  userId: string;
  active: boolean;
  created_at: string;
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormLoginInput {
  email: string;
  password: string;
}

export interface ITaskResponse {
  status: boolean;
  tasks: ITaskDetails[];
}
