import React from "react";

type UnorderedListProps<T> = {
    renderElement: (element: T) =>  React.ReactNode;
    elements: T[];
}

const UnorderedList = <T extends unknown>({renderElement, elements}: UnorderedListProps<T>) => {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={index}>{renderElement(element)}</li>
      ))}
    </ul>
  );
};

export default UnorderedList;
