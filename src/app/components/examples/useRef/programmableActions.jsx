import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.clientWidth);

    inputRef.current.focus();
  };

  const handleClickWidth = () => {
    inputRef.current.style.width = "100px";
  };

  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        E-mail
      </label>
      <input ref={inputRef} id="email" type="email" className="form-control" />
      <button className="btn btn-primary" onClick={handleClick}>
        Focus
      </button>
      <button className="btn btn-secondary" onClick={handleClickWidth}>
        Change width
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
