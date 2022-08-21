import React from "react";

const SingleOrder = ({order}) => {
    const {name, email, serviceName} = order
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>Creadit Card</td>
      <td>
        <button className='btn btn-ghost btn-xs'>On going</button>
      </td>
    </tr>
  );
};

export default SingleOrder;
