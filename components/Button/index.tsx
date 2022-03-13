import React from "react";
import classes from "./style.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

console.log("classes:", classes);

export const Button: React.FC = ({
  children,
  className = "",
  ...props
}: IButtonProps) => {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
