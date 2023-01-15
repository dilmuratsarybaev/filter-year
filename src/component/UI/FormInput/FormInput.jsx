import React from "react";
import "./FormInput.css";
export const FormInput = ({
  id,
  labelName,
  className,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="containerForm">
      <label htmlFor={id} className="label">
        {labelName}
      </label>
      <input
        className={className}
        type={inputType}
        placeholder={placeholder || ""}
        id={id}
        value={value}
        onChange={onChange}
        min="0"
      />
    </div>
  );
};
