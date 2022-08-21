import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, className, children }) => {
  const resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} style={{ fontWeight: match && "bold" }} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
