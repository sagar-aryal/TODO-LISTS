import React from "react";
import { Button } from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Clicked!");
  };

  return (
    <header className="header">
      <h1>My Todo List </h1>
      <Button
        color={!props.showAdd ? "green" : "red"}
        text={!props.showAdd ? "Add" : "close"}
        onClick={props.onAdd}
      />
    </header>
  );
};

// default props
/*
Header.defaultProps = {
  title: "Task Tracker Application",
};
*/

export default Header;
