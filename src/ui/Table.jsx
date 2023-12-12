import React from "react";

const Table = ({ children }) => {
  return (
    <div className="bg-gray-50 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <td>{children}</td>
    </thead>
  );
}
function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

Table.Body = TableBody;
Table.Header = TableHeader;
