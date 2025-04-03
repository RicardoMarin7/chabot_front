import React from "react";

export type ButtonProps = {
  parenthMethod?: () => void;
	children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ parenthMethod, children, disabled}) => {
  return (
    <button
      onClick={parenthMethod}
      disabled={disabled}
      className={`text-sm h-10 px-6 rounded-lg shadow-lg hover:brightness-110 transition-all bg-gradient-to-r from-theme-color-700 to-secondary-color-700 cursor-pointer text-white ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
