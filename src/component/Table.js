import React from "react";
import "./Table.css";

function Table({ cc }) {
  return (
    <div className="table">
      {cc.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
