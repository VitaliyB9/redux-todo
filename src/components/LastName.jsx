import React from "react";
import { useSelector } from "react-redux";

const LastName = () => {
  const lastName = useSelector((state) => state.user.lastName);
  return <div>LastName:{lastName}</div>;
};

export default LastName;
