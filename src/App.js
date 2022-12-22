import "../src/styles/sb-admin-2.min.css";
import "./App.css";
import Home from "./Components/Home";

import Login from "./Pages/Login";
import "../src/Components/components.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Pages/Portal";
import Teachers from "./Teachers";
import Students from "./Components/Students";
import Create from "./Teacher/Create";
import View from "./Teacher/View";
import Edit from "./Teacher/Edit";
import Studentview from "./Students/Studentview";
import Studentcreate from "./Students/Studentcreate";
import Studentedit from "./Students/Studentedit";
import { UserProvider } from "./Context/UserContext";
import ManageStudents from "./Teacher/ManageStudents";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="teachers" element={<Teachers />}></Route>
            <Route path="students" element={<Students />}></Route>
            <Route path="create" element={<Create />}></Route>
            <Route path="view/:id" element={<View />}></Route>
            <Route path="edit/:id" element={<Edit />}></Route>
            <Route path="studentview/:id" element={<Studentview />}></Route>
            <Route path="studentcreate" element={<Studentcreate />}></Route>
            <Route path="studentedit/:id" element={<Studentedit />}></Route>
            <Route
              path="managestudents/:id"
              element={<ManageStudents />}
            ></Route>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
