import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const PortfolioCustomLink = ({ to, className, children }) => {
  const resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link to={to} style={{ color: match && "#00daff" }} className={className}>
      {children}
    </Link>
  );
};

export default PortfolioCustomLink;
