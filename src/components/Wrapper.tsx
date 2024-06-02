import React, { CSSProperties } from "react";

const Wrapper: React.FC<{
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  handleClick?: () => void;
}> = ({ children, className, handleClick, style }) => {
  return (
    <div className={className} style={style} onClick={() => handleClick}>
      {children}
    </div>
  );
};

export default Wrapper;
