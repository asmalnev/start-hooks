import React from "react";
import Card from "../../components/common/Card";

const withFunctions = (Component) => (props) => {
  const isAuth = localStorage.getItem("auth");

  const handleLogin = () => {
    localStorage.setItem("auth", "token");
  };

  const handleLogOut = () => {
    localStorage.removeItem("auth");
  };

  return (
    <Card>
      <Component
        onLogin={handleLogin}
        onLogOut={handleLogOut}
        isAuth={isAuth}
      />
    </Card>
  );
};

export default withFunctions;
