import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StudentCard from "./StudentCard";

function ManageStudents() {
  const params = useParams();
  const [studentList, setStudentList] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      const users = await axios.get(
        "https://63932e42ab513e12c5061a40.mockapi.io/students"
      );
      setStudentList(users.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = studentList.filter((items) => {
    return items.batches === parseInt(params.id);
  });

  return load ? (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>
      <div>
        <Link to="/portal/teachers" className="btn btn-secondary mb-3">
          Back
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            <th scope="col">Sex</th>
            <th scope="col">Course</th>
          </tr>
        </thead>
        {filtered.map((item) => {
          return <StudentCard item={item} />;
        })}
      </table>
    </>
  );
}

export default ManageStudents;
