import Wrapper from "./Wrapper";
import { FaCheck } from "react-icons/fa6";
import CustomTitle from "./CustomTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import { UploadCareApiResponse } from "../types";
import {
  UploadcareSimpleAuthSchema,
  deleteFile,
} from "@uploadcare/rest-client";

const CustomFileReceiver = ({
  originalFilename,
  size,
  uuid,
}: UploadCareApiResponse) => {
  const d = async () => {
    const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      publicKey: "d397e169eeaeaab6f930",
      secretKey: "6967a8fe72bc3b51288d",
    });

    try {
      console.log(uuid);

      const result = await deleteFile(
        {
          uuid: uuid!,
        },
        { authSchema: uploadcareSimpleAuthSchema }
      );

      window.location.reload();
      return result;
    } catch (e) {
      console.log(e);
    }
  };

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
              title={originalFilename || "Filename.jpg"}
              className=" font-bold text-base"
            />
            <CustomTitle
              title={size! / 1000?.toString() + "KB" || "1 TB used"}
              className="mulish font-normal text-xs"
            />
          </Wrapper>
        </Wrapper>

        <FaRegTrashAlt onClick={() => d()} />
      </Wrapper>

      <hr />
    </Wrapper>
  );
};

export default CustomFileReceiver;
