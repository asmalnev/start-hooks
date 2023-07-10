import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return React.Children.toArray(children).map((child, index) => {
    return React.cloneElement(child, { key: index + 1 });
  });
};

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>

      <Wrapper>
        <Component />
        <Component />
        <Component />
      </Wrapper>
    </CollapseWrapper>
  );
};

const Component = ({ key }) => {
  console.log(key);
  return <div>Компонент списка {key}</div>;
};

Component.propTypes = {
  key: PropTypes.number
};

export default ChildrenExercise;
