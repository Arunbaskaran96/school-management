import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Studentedit() {
  const params = useParams();
  const [isloading, setLoad] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
    },

    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "please enter name";
      }
      if (!values.email) {
        errors.email = "please enter email";
      }
      if (!values.phone) {
        errors.phone = "please enter phone number";
      }
      if (!values.gender) {
        errors.gender = "please select gender";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        const user = await axios.put(
          `https://63932e42ab513e12c5061a40.mockapi.io/students/${params.id}`,
          values
        );
        setLoad(true);
        navigate("/portal/students");
      } catch (error) {}
    },
  });
  useEffect(() => {
    getUser();
  }, []);
  let getUser = async () => {
    const edit = await axios.get(
      `https://63932e42ab513e12c5061a40.mockapi.io/students/${params.id}`
    );
    formik.setValues(edit.data);
  };
  return (
    <div className="container" id="create-div">
      <div>
        <Link to="/portal/students" className="btn btn-info">
          Back
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div
            style={{ textAlign: "end", marginBottom: "2px" }}
            className="col-4 labels"
          >
            <label className="labels">Name</label>
            <br />
            <label className="labels">Email</label>
            <br />
            <label className="labels">Phone number</label>
            <br />
            <label className="labels">Gender</label>
            <br />
            <label className="labels">Batch</label>
            <br />
            <label className="labels">Course</label>
            <br />
          </div>
          <div className="col-8 inputs">
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`inputs ${formik.errors.name ? "is-invalid" : ""}`}
              type={"text"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.name}</span>
            <br />
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`inputs ${formik.errors.name ? "is-invalid" : ""}`}
              type={"email"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.email}</span>
            <br />
            <input
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="inputs"
              type={"text"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.phone}</span>
            <br />
            <select
              onChange={formik.handleChange}
              name="gender"
              value={formik.values.gender}
              className="inputs"
            >
              <option value={""}>---Select youe gender---</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>female</option>
            </select>
            <span style={{ color: "red" }}>{formik.errors.gender}</span>
            <br></br>
            <input
              name="batches"
              onChange={formik.handleChange}
              value={formik.values.batches}
              className="inputs"
              type={"number"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.batches}</span>
            <br />
            <input
              name="course"
              onChange={formik.handleChange}
              value={formik.values.course}
              className="inputs"
              type={"text"}
            ></input>
            <br />
            <span style={{ color: "red" }}>{formik.errors.course}</span>
            <input disabled={isloading} type={"submit"} value="Update"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Studentedit;
