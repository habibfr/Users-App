import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return error;
    } else if (+enteredAge < 1) {
      setError({
        title: "Age Wrong",
        message: "Please enter a valid age (> 0).",
      });
      return error;
    } else {
      props.onAddUser(enteredUsername.trim(), enteredAge.trim());
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
