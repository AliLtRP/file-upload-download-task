import { CustomTitleProps } from "../types";

const CustomTitle = (props: CustomTitleProps) => {
  return (
    <div className={props.className} onClick={() => props.handleClick}>
      {props.title}
    </div>
  );
};

export default CustomTitle;
