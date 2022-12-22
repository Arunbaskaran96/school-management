import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Studentview() {
  const params = useParams();
  const [user, setUser] = useState({});
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const users = await axios.get(
        `https://63932e42ab513e12c5061a40.mockapi.io/students/${params.id}`
      );
      setUser(users.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  return isLoad ? (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  ) : (
    <div>
      <div>
        <Link to="/portal/studentcreate" className="btn btn-info">
          Back
        </Link>
      </div>
      <div
        class="card"
        id="cards"
        style={{ width: "18rem", marginTop: "50px", marginLeft: "400px" }}
      >
        <div class="card-header">Name: {user.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email: {user.email}</li>
          <li class="list-group-item">Phone: {user.phone}</li>
          <li class="list-group-item">Gender: {user.gender}</li>
        </ul>
      </div>
    </div>
  );
}

export default Studentview;
