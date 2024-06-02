import { CSSProperties } from "react";

const CustomButton = ({
  title,
  className,
  style,
}: {
  title?: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <button className={className} style={style} type="submit">
      {title}
    </button>
  );
};

export default CustomButton;
