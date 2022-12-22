import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Scard from "../Cards/Scard";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH-DATA":
      return {
        student: action.payload,
        isLoad: false,
      };

    default:
      break;
  }
}

function Students() {
  const [state, dispatch] = useReducer(reducer, { student: [], isLoad: true });
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let students = await axios.get(
        "https://63932e42ab513e12c5061a40.mockapi.io/students"
      );
      dispatch({
        type: "FETCH-DATA",
        payload: students.data,
      });
    } catch (error) {}
  };

  let handleDelete = async (id) => {
    try {
      alert("Do you want to delete?");
      await axios.delete(
        `https://63932e42ab513e12c5061a40.mockapi.io/students/${id}`
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return state.isLoad ? (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>
      <div>
        <Link to="/portal/studentcreate" className="btn btn-info mb-3">
          Create
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            <th scope="col">Sex</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {state.student.map((item) => {
          return <Scard handleDelete={handleDelete} item={item} />;
        })}
      </table>
    </>
  );
}

export default Students;
