import React from "react";

const Button = ({ children, color, onClick, width, ...rest }) => {

  const { className, disabled } = rest;

  return (
    <>
      <button style={{ background: color, width: width }} className={className ?? ''} disabled={disabled ?? false} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button;
