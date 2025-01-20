import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  label,
  children,
  htmlFor,
  error,
  customClassName = "",
  passwordToggle,
  setPasswordToggle,
}) => {
  const id = htmlFor || getChildrenId(children);

  return (
    <div className={`form-control ${customClassName ? customClassName : ""}`}>
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text text-white">{label}</span>
        </label>
      )}
      {id === "password" || id === "confirm-password" ? (
        <div className="relative w-full">
          {children}{" "}
          <div className="absolute top-4 right-6 z-20">
            {passwordToggle ? (
              <div onClick={() => setPasswordToggle((prev) => !prev)}>
                <FaEye size={15} color="#000" />
              </div>
            ) : (
              <div onClick={() => setPasswordToggle((prev) => !prev)}>
                <FaEyeSlash size={15} color="#000" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}

      {!!error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  );
};

const getChildrenId = (child) => {
  const children = React.Children.only(child);
  if ("id" in children.props) {
    return children?.props?.id;
  }
};

export default InputField;
