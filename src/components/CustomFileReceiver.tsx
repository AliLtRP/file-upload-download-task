import Wrapper from "./Wrapper";
import { FaCheck } from "react-icons/fa6";
import CustomTitle from "./CustomTitle";
import { FaRegTrashAlt } from "react-icons/fa";

const CustomFileReceiver = () => {
  return (
    <Wrapper className="w-full h-auto">
      <Wrapper className="w-full h-auto flex justify-between items-center p-2 py-4">
        <Wrapper className="flex justify-center items-center gap-4">
          <FaCheck
            size={15}
            color="white"
            className="rounded-full w-6 h-6 p-1 bg-[#89cc37]"
          />
          <Wrapper>
            <CustomTitle
              title="Filename.jpg"
              className=" font-bold text-base"
            />
            <CustomTitle
              title="1 TB used"
              className="mulish font-normal text-xs"
            />
          </Wrapper>
        </Wrapper>

        <FaRegTrashAlt />
      </Wrapper>

      <hr />
    </Wrapper>
  );
};

export default CustomFileReceiver;
