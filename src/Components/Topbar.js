import React, { createContext, useContext } from "react";
import UserContext from "../Context/UserContext";

function Topbar() {
  const data = useContext(UserContext);

  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h4 style={{ textAlign: "center", color: "black", width: "100%" }}>
        CHIRST THE KING MATRICULATION HIGHER SECONDARY SCHOOL
      </h4>
      <div>{data.user.name}</div>
    </nav>
  );
}

export default Topbar;
