import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

// useCallback получает функцию, массив зависимостией и возвращает закешированное значение выполненной функции и также хранит в себе саму функцию

const UseCallBackExample = () => {
  const [data, setData] = useState({});

  const withoutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  // без useCallback
  const validateWithoutCallback = (data) => console.log(data);

  useEffect(() => {
    withoutCallback.current++;
  }, [validateWithoutCallback]);

  // с useCallback
  const validateWithCallback = useCallback(
    (data) => console.log(data), // функция
    [] // зависимости, пусто потому что нет зависимых данных в области видимости данной функции, ничего не берется из родительского компонента
  );

  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  // вызов функций по изменению data
  useEffect(() => {
    validateWithoutCallback(data);
    validateWithCallback(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withoutCallback: {withoutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor="email" className="form-label">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        className="form-control"
        value={data.email || ""}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
