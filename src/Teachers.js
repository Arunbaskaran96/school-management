import axios from "axios";
import React, { useEffect, useState } from "react";
import Tcard from "./Cards/Tcard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Teachers() {
  const [teacher, setTeacher] = useState([]);
  const [isload, setLoad] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let teachers = await axios.get(
        "https://63932e42ab513e12c5061a40.mockapi.io/teachers"
      );
      setTeacher(teachers.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  let del = async (id) => {
    try {
      await axios.delete(
        `https://63932e42ab513e12c5061a40.mockapi.io/teachers/${id}`
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return isload ? (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>
      <div>
        <Link to="/portal/create" className="btn btn-info btn-sm mb-2">
          Create{" "}
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            <th scope="col">Sex</th>
            <th scope="col">Manage Students</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {teacher.map((item) => {
          return <Tcard item={item} del={del} />;
        })}
      </table>
    </>
  );
}

export default Teachers;
