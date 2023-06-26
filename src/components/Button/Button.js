import React from "react";
import { cx, css } from "@emotion/css";
import PropTypes from "prop-types";

const buttonStyles = ({
  bgColor,
  color,
  width,
  height,
  colorHover,
  bgColorHover,
  borderRadius,
}) => css`
  background-color: ${bgColor};
  color: ${color};
  border-radius: ${borderRadius || "8px"};
  width: ${width || "150px"};
  height: ${height || "40px"};
  text-align: center;
  &:hover{
    background-color: ${bgColorHover}
    color: ${colorHover}
  }
`;

const Button = React.forwardRef((props, ref) => {
  const {
    className,
    type,

    width,
    height,
    bgColor,
    color,

    colorHover,
    bgColorHover,
    ...otherProps
  } = props;
  return (
    <button
      ref={ref}
      type={type || "button"}
      className={cx(
        buttonStyles({
          width,
          height,
          bgColor,
          color,
          bgColorHover,
          colorHover,
        }),
        className
      )}
      {...otherProps}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  colorHover: PropTypes.string,
  bgColorHover: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Button;
