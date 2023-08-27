import { useMemo } from "react";
import "./PrimaryButton.css";
const PrimaryButton = ({
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
  primaryButtonBorder,
  primaryButtonBoxSizing,
  vectorIconWidth,
  vectorIconHeight,
  lineDivHeight,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      position: primaryButtonPosition,
      top: primaryButtonTop,
      left: primaryButtonLeft,
      border: primaryButtonBorder,
      boxSizing: primaryButtonBoxSizing,
    };
  }, [
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
    primaryButtonBorder,
    primaryButtonBoxSizing,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const lineDivStyle = useMemo(() => {
    return {
      height: lineDivHeight,
    };
  }, [lineDivHeight]);

  return (
    <div className="primary-button" style={primaryButtonStyle}>
      <div className="frame-parent">
        <div className="see-more-wrapper">
          <div className="see-more">See more</div>
        </div>
        <img
          className="vector-icon"
          alt=""
          src="/vector.svg"
          style={vectorIconStyle}
        />
      </div>
      <div className="primary-button-child" style={lineDivStyle} />
    </div>
  );
};

export default PrimaryButton;
