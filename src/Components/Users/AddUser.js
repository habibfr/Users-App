import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    } else if (+enteredAge < 1) {
      return;
    } else {
      console.log(enteredUsername.trim(), enteredAge.trim());
    }

    setenteredUsername("");
    setEnteredAge("");
  };

  const usernameHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={usernameHandler}
          id="username"
          type="text"
          value={enteredUsername}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          onChange={ageHandler}
          id="age"
          type="number"
          value={enteredAge}
        />
        <Button type="submit" text="Add User" />
      </form>
    </Card>
  );
};

export default AddUser;
