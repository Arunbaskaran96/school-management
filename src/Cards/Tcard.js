import React from "react";
import { Link } from "react-router-dom";

function Tcard({ item, del }) {
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.gender}</td>
        <td>
          <Link
            className="btn btn-secondary btn-sm"
            to={`/portal/managestudents/${item.id}`}
          >
            View list
          </Link>
        </td>
        <td>
          <Link
            to={`/portal/view/${item.id}`}
            className="btn btn-success btn-sm mr-2 "
          >
            View
          </Link>
          <Link
            to={`/portal/edit/${item.id}`}
            className="btn btn-primary btn-sm  mr-2  "
          >
            Edit
          </Link>
          <button
            onClick={() => del(item.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Tcard;
