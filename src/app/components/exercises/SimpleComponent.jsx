import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    <>
      {!isAuth ? (
        <button onClick={onLogin}>Войти</button>
      ) : (
        <button onClick={onLogOut}>Выйти</button>
      )}
    </>
  );
};

SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;
