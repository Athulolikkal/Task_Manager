/* eslint-disable @typescript-eslint/no-explicit-any */
import TaskList from "./pages/task/task_list";
import SignIn from "./pages/auth/sign_in";
import SignUp from "./pages/auth/sign_up";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./pages/layout/layout";

function App() {
  const isUser = useSelector((state: any) => state.userInfo.userId)


  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/signin" element={!isUser ? (<SignIn />) : ((<Navigate to='/' replace={true} />))} />
            <Route path="/signup" element={!isUser ? (<SignUp />) : ((<Navigate to='/' replace={true} />))} />
            <Route path="/" element={isUser ? (<TaskList />) : ((<Navigate to='/signin' replace={true} />))} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
