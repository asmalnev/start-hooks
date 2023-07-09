import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => (n ? n * factorial(n - 1) : 1);

const runFactorial = (n) => {
  console.log("runFactorial");

  return factorial(n);
};

// мемоизация используется в том случае, если необходимо сохранить данные (результат) - useMemo, а если необходимо сохранить обращение к функции, то используется useCallback

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState(false);

  // мемоизация результата работы функции runFactorial в зависимости от изменяемого параметра value
  const fact = useMemo(
    () => runFactorial(value), // функция
    [value] // зависимость
  );

  const buttonColor = otherState ? "primary" : "secondary";

  // const buttonColor = useMemo(
  //   () => ({
  //     value: otherState ? "primary" : "secondary"
  //   }),
  //   [otherState]
  // );

  useEffect(() => {
    console.log("render buttonColor");
  }, [buttonColor]);

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>Value: {value}</p>
        <p>Result fact: {fact}</p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setValue((prevState) => prevState + 10)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setValue((prevState) => prevState - 10)}
        >
          Decrement
        </button>
      </CardWrapper>

      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button
          className={`btn btn-${buttonColor}`}
          onClick={() => setOtherState(!otherState)}
        >
          Toggle color
        </button>
      </CardWrapper>
    </>
  );
};

export default ComplexCalculateExample;
