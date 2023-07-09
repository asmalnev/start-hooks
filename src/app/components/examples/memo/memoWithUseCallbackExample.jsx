import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render button");
  });

  return (
    <button className="btn btn-primary" onClick={onLogOut}>
      Log out
    </button>
  );
};

LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};

const areEqual = (prevState, nextState) =>
  prevState.onLogOut === nextState.onLogOut;

const MemoWithLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);

  const handleLogOut = useCallback(
    () => localStorage.removeItem("auth"),
    [props]
  );

  return (
    <>
      <button className="btn btn-primary" onClick={() => setState(!state)}>
        initiate rerender
      </button>
      <MemoWithLogOutButton onLogOut={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;
