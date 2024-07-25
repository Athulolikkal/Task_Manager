import TaskList from "./pages/task/task_list";
import SignIn from "./pages/auth/sign_in";
import SignUp from "./pages/auth/sign_up";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<TaskList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
