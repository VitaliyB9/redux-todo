import React from "react";
import { useSelector } from "react-redux";

const FirstName = () => {
  const firstName = useSelector((state) => state.user.firstName);
  return <div>FirstName:{firstName}</div>;
};

export default FirstName;
