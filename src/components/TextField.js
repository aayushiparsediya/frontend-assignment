import { useMemo } from "react";
import "./TextField.css";
const TextField = ({
  textFieldPosition,
  textFieldTop,
  textFieldLeft,
  frameDivWidth,
  frameDivPadding,
  fLORIDAJACKETWidth,
  fLORIDAJACKETHeight,
  sufferedAlterationInWidth,
  sufferedAlterationInHeight,
  divWidth,
  divHeight,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      position: textFieldPosition,
      top: textFieldTop,
      left: textFieldLeft,
    };
  }, [textFieldPosition, textFieldTop, textFieldLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
    };
  }, [frameDivWidth, frameDivPadding]);

  const fLORIDAJACKETStyle = useMemo(() => {
    return {
      width: fLORIDAJACKETWidth,
      height: fLORIDAJACKETHeight,
    };
  }, [fLORIDAJACKETWidth, fLORIDAJACKETHeight]);

  const sufferedAlterationInStyle = useMemo(() => {
    return {
      width: sufferedAlterationInWidth,
      height: sufferedAlterationInHeight,
    };
  }, [sufferedAlterationInWidth, sufferedAlterationInHeight]);

  const divStyle = useMemo(() => {
    return {
      width: divWidth,
      height: divHeight,
    };
  }, [divWidth, divHeight]);

  return (
    <div className="text-field" style={textFieldStyle}>
      <div className="florida-jacket-parent" style={frameDivStyle}>
        <div className="florida-jacket" style={fLORIDAJACKETStyle}>
          FLORIDA JACKET
        </div>
        <div
          className="suffered-alteration-in"
          style={sufferedAlterationInStyle}
        >
          Suffered alteration in some form, bysuffalterattion in some forme,
          byinjected humor, or randomised
        </div>
        <div className="florida-jacket" style={divStyle}>
          $100
        </div>
      </div>
    </div>
  );
};

export default TextField;
