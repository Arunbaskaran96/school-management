import React from "react";
import { Link } from "react-router-dom";

function Scard({ item, handleDelete }) {
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.gender}</td>
        <td>
          <Link
            to={`/portal/studentview/${item.id}`}
            className="btn btn-success btn-sm mr-2 "
          >
            View
          </Link>
          <Link
            to={`/portal/studentedit/${item.id}`}
            className="btn btn-primary btn-sm  mr-2  "
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Scard;
