import React from "react";

import "./Button.scss";

export const Button = ({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={`button ${className ?? ""}` } {...rest}>{children}</button>;
};
