import React from "react";

import "./VisuallyHidden.scss";

type VisuallyHiddenType = {
  children: string;
};

export const VisuallyHidden = ({ children }: VisuallyHiddenType) => {
  return <span className="visually-hidden">{children}</span>;
};
