import React from "react";

// Exporting the ContainerCust, Row, and Col components from this file

// This ContainerCust component allows us to use a bootstrap containerCust without worrying about class names
export const ContainerCust = ({ fluid, children }) => {
  return <div className={`containerCust${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export const Rows = ({ fluid, children }) => {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export const Col = ({ size, children }) => {
  return (
    <div
      className={size
        .split(" ").map(size => "col-" + size).join(" ")}
    >
      {children}
    </div>
  );
}