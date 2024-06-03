import "./App.css";
import CustomProgressSlider from "./components/CustomProgressSlider";
import CustomTitle from "./components/CustomTitle";
import Wrapper from "./components/Wrapper";
import { RiDownloadCloud2Line } from "react-icons/ri";
import CustomFileReceiver from "./components/CustomFileReceiver";
import CustomButton from "./components/CustomButton";
import useUploadCare from "./hooks/useUploadCare";
import fileDialog from "file-dialog";

function App() {
  const { data, isError, setFile, setFetch } = useUploadCare({
    publicK: "39de4d5d3bfb2f6e1abb",
  });

  const handleClick = () => {
    fileDialog().then((file) => {
      setFetch(true);
      setFile(file[0]);
    });
  };

  console.log(data);

  return (
    <Wrapper className="bg-[#F6F9FF] w-full h-auto min-h-[100vh] flex flex-col justify-center items-center">
      <Wrapper className="w-80 flex justify-end">
        <Wrapper className="p-4 bg-white rounded-2xl border-8 border-[#E0EAFD]">
          <RiDownloadCloud2Line size={25} onClick={() => handleClick()} />
        </Wrapper>
      </Wrapper>
      <Wrapper className="h-auto w-80 flex flex-col justify-start items-start gap-0 p-6 my-4 rounded-3xl shadow-2xl bg-white">
        <Wrapper className="w-full flex flex-col justify-evenly items-start p-2 rounded-xl bg-[#F6F9FF] h-28">
          <CustomTitle
            title="Loading...."
            className="mulish text-[18px] ml-1"
          />

          <Wrapper className="relative w-full h-4 bg-white rounded-full overflow-hidden border-2 border-[#E0EAFD] opacity-100 p-2">
            <CustomProgressSlider progress={50} />
          </Wrapper>

          <CustomTitle
            title="256 bytes of 1 TB"
            className="mulish text-xs font-light ml-1"
          />
        </Wrapper>
        <CustomFileReceiver
          originalFilename={data?.originalFilename}
          size={data?.size}
          isStored={data?.isStored}
        />
        <CustomFileReceiver
          originalFilename={data?.originalFilename}
          size={data?.size}
          isStored={data?.isStored}
        />

        <CustomButton
          title="Go to Downloads"
          className="border-2 w-full h-14 rounded-lg mt-8 mb-2 border-[#A1ACD2] mulish text-sm font-normal"
        />
      </Wrapper>
    </Wrapper>
  );
}

export default App;
