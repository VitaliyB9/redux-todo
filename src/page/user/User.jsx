import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../../features/user/userSlice";
import FirstName from "../../components/FirstName";
import LastName from "../../components/LastName";
import classes from "./User.module.css";

const User = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.user}>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
      <input className={classes.inputTwo}
        type="text"
        placeholder="Last Name"
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
      <div className={classes.name}>
        <FirstName />
        <LastName />
      </div>
    </div>
  );
};

export default User;
