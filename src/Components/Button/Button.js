import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
