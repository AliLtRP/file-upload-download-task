import Wrapper from "./Wrapper";

const CustomProgressSlider = ({
  progress,
  isVisible,
}: {
  progress: number | undefined | null;
  isVisible: boolean;
}) => {
  return (
    <Wrapper
      className={`absolute top-[3px] left-1 rounded-full overflow-hidden h-2.5 bg-black transition-width duration-1000 ease-in-out`}
      style={{
        width: `${progress}%`,
        opacity: isVisible ? 1 : 0,
        transition: "width 0s ease-in-out, opacity 0s ease-in-out",
      }}
    />
  );
};

export default CustomProgressSlider;
