import React from "react";

const OutputItem = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li className="name_wrap" onClick={onDeleteHandler}>{props.children}</li>;
};

export default OutputItem;
