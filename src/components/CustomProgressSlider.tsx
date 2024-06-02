import Wrapper from "./Wrapper";

const CustomProgressSlider = ({ progress }: { progress: number }) => {
  return (
    <Wrapper
      className="absolute top-[3px] left-1 rounded-full h-2.5 bg-black transition-width duration-300 ease-in-out"
      style={{ width: `${progress}%` }}
    />
  );
};

export default CustomProgressSlider;
