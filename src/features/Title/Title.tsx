import React, { useEffect } from "react";

import "./Title.scss";

type TitlePropsType = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

type Ref = React.Ref<HTMLHeadingElement>;

export const Title = React.forwardRef(
  ({ children, className, ...rest }: TitlePropsType, ref?: Ref) => {
    useEffect(() => {
      document.title = children;
      return () => {
        document.title = "Shop";
      };
    }, [children]);

    return (
      <h1 ref={ref} className={`${className ?? ""} title`} {...rest}>
        {children}
      </h1>
    );
  }
);
