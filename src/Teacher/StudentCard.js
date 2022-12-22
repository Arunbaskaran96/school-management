import React from "react";

function StudentCard({ item }) {
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.gender}</td>
        <td>{item.course}</td>
      </tr>
    </tbody>
  );
}

export default StudentCard;
