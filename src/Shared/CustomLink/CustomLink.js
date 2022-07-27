import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({to, children}) => {
    const resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link to={to}
            style={{fontWeight: match && 'bold'}}>
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;